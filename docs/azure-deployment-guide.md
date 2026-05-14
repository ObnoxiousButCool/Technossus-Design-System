# Technossus Website V2 — Azure Deployment Guide

## Application Overview

| Property | Value |
|---|---|
| Framework | Next.js 16 (App Router) |
| Node.js | 20.x |
| Hosting target | Azure Static Web Apps |
| SWA resource | `Technossus-Web-V2-Dev` |
| Resource Group | `RG-Technossus-WebV2` |
| Azure DevOps project | `Technossus-WebsiteV2` |
| Repo | `Technossus-WebsiteV2-Web` |
| CI pipeline | `azure-pipelines.yml` |
| CD pipeline | `azure-pipelines-cd.yml` |

---

## Phase 1 — Azure Infrastructure Setup (One-time)

### Step 1 — Create the Resource Group

```bash
az login
az group create \
  --name RG-Technossus-WebV2 \
  --location eastus
```

---

### Step 2 — Create the Azure Static Web App

```bash
az staticwebapp create \
  --name Technossus-Web-V2-Dev \
  --resource-group RG-Technossus-WebV2 \
  --location eastus2 \
  --sku Free
```

> **Note:** The `Free` SKU supports named preview environments (used for the staging slot). Upgrade to `Standard` if you need custom domains, private endpoints, or SLA.

---

### Step 3 — Retrieve the Deployment Token

```bash
az staticwebapp secrets list \
  --name Technossus-Web-V2-Dev \
  --resource-group RG-Technossus-WebV2 \
  --query "properties.apiKey" \
  --output tsv
```

Copy the output — you'll need it in Phase 2, Step 2.

---

## Phase 2 — Azure DevOps Setup (One-time)

### Step 1 — Import the Repository

1. Go to `https://dev.azure.com/technossus/Technossus-WebsiteV2`
2. **Repos → Import** → Git URL:
   ```
   https://technossus@dev.azure.com/technossus/Technossus-WebsiteV2/_git/Technossus-WebsiteV2-Web
   ```

---

### Step 2 — Create the Pipeline Secret Variable

1. Go to **Pipelines → Library → + Variable group** (or set it on the pipeline directly)
2. Add a **secret** variable:
   - **Name:** `AZURE_SWA_DEPLOYMENT_TOKEN`
   - **Value:** *(paste the token from Phase 1, Step 3)*
   - Check **Keep this value secret**
3. Save.

---

### Step 3 — Create the CI Pipeline

1. **Pipelines → New Pipeline → Azure Repos Git → `Technossus-WebsiteV2-Web`**
2. Select **Existing Azure Pipelines YAML file**
3. Branch: `main` | Path: `/azure-pipelines.yml`
4. Click **Save** (do not run yet)
5. **Rename the pipeline** to exactly `Technossus-WebsiteV2-Web`
   - Pipeline → ⋯ menu → **Rename/move**

> **Important:** This name is critical — the CD pipeline references it via
> `source: 'Technossus-WebsiteV2-Web'` in the pipeline resource trigger.

---

### Step 4 — Create the CD Pipeline

1. **Pipelines → New Pipeline → Azure Repos Git → `Technossus-WebsiteV2-Web`**
2. Select **Existing Azure Pipelines YAML file**
3. Branch: `main` | Path: `/azure-pipelines-cd.yml`
4. Click **Save**

---

### Step 5 — Create the Deployment Environments

**WebV2-Staging** (auto-deploy, no approval):

1. Go to **Pipelines → Environments → New environment**
2. Name: `WebV2-Staging` | Resource: None
3. Save — leave no approvals.

**WebV2-Production** (approval gate):

1. **New environment** → Name: `WebV2-Production` | Resource: None
2. Click **Approvals and Checks → + → Approvals**
3. Add required approvers, set timeout, save.

---

## Phase 3 — Local Verification Before First Deploy

### Step 1 — Install Dependencies

```bash
cd Technossus-WebsiteV2-Web
npm ci
```

### Step 2 — Run Production Build Locally

```bash
npm run build
```

Verify that:
- `.next/` directory is created
- No hard build errors

> **Note:** `typescript.ignoreBuildErrors: true` is currently set in `next.config.mjs`.
> TypeScript errors are suppressed during `next build` but are still surfaced by the CI
> pipeline's `tsc --noEmit` step. Track and resolve TS errors before removing this flag.

### Step 3 — Test the Production Build Locally

```bash
npm start
```

---

## Phase 4 — Triggering the CI/CD Pipeline

### Automatic Trigger (normal workflow)

```bash
git checkout main
git push origin main
```

This triggers **in order**:

1. **CI pipeline** (`azure-pipelines.yml`) runs 3 stages:
   - `Audit` — npm dependency security scan + config flag review
   - `Quality` — TypeScript type check (`tsc --noEmit`) + ESLint
   - `Build` — `next build` + artifact publish
2. On CI success on `main` → **CD pipeline** auto-triggers via the pipeline resource trigger
3. **CD Stage 1 — Build** — production `next build`, publishes `nextjs-app` artifact
4. **CD Stage 2 — Deploy → Staging** (auto, no approval)
   - Preview URL: `https://<hash>-staging.<region>.azurestaticapps.net`
5. **CD Stage 3 — Deploy → Production** (requires approval in Azure DevOps)
   - Approvers are notified; pipeline waits until approved
   - URL: your SWA's primary domain

### Manual CD Trigger

If you need to deploy without a code push:

1. **Pipelines → CD pipeline → Run pipeline**
2. Branch: `main` → **Run**

---

## Phase 5 — Custom Domain (Optional)

```bash
az staticwebapp hostname set \
  --name Technossus-Web-V2-Dev \
  --resource-group RG-Technossus-WebV2 \
  --hostname www.technossus.com
```

Then add a `CNAME` record at your DNS provider:

```
www  →  <your-swa-default-hostname>.azurestaticapps.net
```

> For the apex domain (`technossus.com`), use an `ALIAS` or `ANAME` record, or route
> traffic through **Azure Front Door** for full control over caching and WAF rules.

---

## Phase 6 — Post-Deployment Checklist

- [ ] Production URL loads and renders correctly
- [ ] Staging preview URL is accessible
- [ ] Fonts load (Google Fonts + Fontshare CDN)
- [ ] Images from remote domains resolve correctly
- [ ] `metadataBase` in `app/layout.tsx` updated from `newtechnossus-v2.vercel.app` to your production Azure SWA domain
- [ ] `AZURE_SWA_DEPLOYMENT_TOKEN` is set as a **secret** pipeline variable
- [ ] CI pipeline is named **exactly** `Technossus-WebsiteV2-Web` in Azure DevOps
- [ ] Production approval gate configured on the `WebV2-Production` environment

---

## Known Issues to Resolve Before Production

| File | Issue | Action |
|---|---|---|
| `next.config.mjs` | `typescript.ignoreBuildErrors: true` | Remove once all TS errors are resolved |
| `next.config.mjs` | `images.remotePatterns` uses wildcard `**` hostname | Restrict to specific known domains |
| `app/layout.tsx` | `metadataBase` points to Vercel URL | Update to production Azure SWA domain |
| `tsconfig.json` | `noUnusedLocals` and `noUnusedParameters` are `false` | Enable for stricter code quality |

---

## Pipeline Architecture Reference

```
┌─────────────────────────────────────────────────────────────┐
│  git push → main                                            │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  CI Pipeline  (azure-pipelines.yml)                         │
│  ┌──────────┐   ┌─────────────┐   ┌────────────────────┐   │
│  │  Audit   │──▶│   Quality   │──▶│  Build + Artifact  │   │
│  └──────────┘   └─────────────┘   └────────────────────┘   │
└───────────────────────┬─────────────────────────────────────┘
                        │  triggers on main success
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  CD Pipeline  (azure-pipelines-cd.yml)                      │
│  ┌──────────────┐   ┌───────────────┐   ┌───────────────┐  │
│  │  Build (CD)  │──▶│    Staging    │──▶│  Production   │  │
│  │  next build  │   │  (auto-deploy)│   │ (approval gate│  │
│  └──────────────┘   └───────────────┘   └───────────────┘  │
│                              │                    │         │
│                              ▼                    ▼         │
│                    SWA preview env       SWA production slot │
└─────────────────────────────────────────────────────────────┘
```
