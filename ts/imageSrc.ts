export type ImageSource = string | { src: string };

export function resolveImageSrc(source?: ImageSource | null): string | undefined {
  if (!source) return undefined;
  return typeof source === 'string' ? source : source.src;
}
