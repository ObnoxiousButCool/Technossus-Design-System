'use client';

import React, { useState } from 'react';
import { Tag }            from '../Tag';
import { TextInputField } from '../TextInputField';
import { Checkbox }       from '../Checkbox';

// Design tokens
const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';

export interface ContactFormPopUpProps {
  /** Pre-fills the topic tag and Area of Interest field */
  topic?: string;
  onClose?: () => void;
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  message: string;
  consent: boolean;
}

export function ContactFormPopUp({
  topic = 'AI-LED BUSINESS TRANSFORMATION',
  onClose,
  onSubmit,
  className,
  style,
}: ContactFormPopUpProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    areaOfInterest: topic !== 'AI-LED BUSINESS TRANSFORMATION' ? topic : 'AI-Led Business Transformation',
    message: '',
    consent: false,
  });

  // Track which required fields have been submitted with empty values
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});

  const handleSubmit = () => {
    const newErrors = {
      name:  !form.name.trim(),
      email: !form.email.trim(),
    };
    setErrors(newErrors);
    if (newErrors.name || newErrors.email) return;
    onSubmit?.(form);
  };

  return (
    <div
      data-node-id="2398:4994"
      className={className}
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        alignItems: 'flex-end',
        padding: '32px 24px',
        width: 696,
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      {/* ── Header: tag + close ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>

          {/* Tag row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%' }}>
            <div style={{ flex: 1 }}>
              <Tag label={topic} variant="dark" />
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 27,
                height: 26,
                backgroundColor: '#F5F5F5',
                border: 'none',
                cursor: 'pointer',
                fontFamily: sans,
                fontSize: 13,
                color: '#5C5C5C',
                flexShrink: 0,
                padding: 0,
              }}
            >
              ✕
            </button>
          </div>

          {/* Title section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
            <p style={{ fontFamily: serif, fontWeight: 600, fontSize: 32, lineHeight: '36px', color: red, margin: 0 }}>
              Let's Connect
            </p>
            <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#5C5C5C', margin: 0 }}>
              Fill in the details below and we'll confirm your slot within 24 hours.
            </p>
          </div>
        </div>

        {/* Red accent bar */}
        <div style={{ width: 78.65, height: 3, backgroundColor: red, flexShrink: 0 }} />
      </div>

      {/* ── Form fields ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>

          {/* Row 1: Name + Email */}
          <div style={{ display: 'flex', gap: 24, width: '100%' }}>
            <TextInputField
              label="Your Name"
              required
              placeholder="What's this about"
              value={form.name}
              onChange={(v) => { setForm(f => ({ ...f, name: v })); setErrors(e => ({ ...e, name: false })); }}
              state={errors.name ? 'Error' : 'Default'}
              errorMessage={errors.name ? 'This field is required' : undefined}
              style={{ flex: 1 }}
            />
            <TextInputField
              label="Work Email"
              required
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={(v) => { setForm(f => ({ ...f, email: v })); setErrors(e => ({ ...e, email: false })); }}
              state={errors.email ? 'Error' : 'Default'}
              errorMessage={errors.email ? 'This field is required' : undefined}
              style={{ flex: 1 }}
            />
          </div>

          {/* Row 2: Phone + Area of Interest */}
          <div style={{ display: 'flex', gap: 24, width: '100%' }}>
            <TextInputField
              label="Phone Number"
              type="tel"
              placeholder="+1 (949) 000-0000"
              value={form.phone}
              onChange={(v) => setForm(f => ({ ...f, phone: v }))}
              style={{ flex: 1 }}
            />
            <TextInputField
              label="Area of Interest"
              placeholder="Area of Interest"
              value={form.areaOfInterest}
              onChange={(v) => setForm(f => ({ ...f, areaOfInterest: v }))}
              style={{ flex: 1 }}
            />
          </div>

          {/* Row 3: Message textarea */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <label style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#1E1E1E' }}>
              How Can We Help You?
            </label>
            <textarea
              placeholder="Briefly describe what you'd like to discuss or achieve..."
              value={form.message}
              onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
              rows={5}
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: '#1E1E1E',
                backgroundColor: '#FFFFFF',
                border: '1px solid #ADADAD',
                borderRadius: 2,
                padding: '18px 16px',
                width: '100%',
                boxSizing: 'border-box',
                resize: 'vertical',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Consent row */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', height: 40, width: '100%' }}>
          <Checkbox
            checked={form.consent}
            onChange={(v: boolean) => setForm(f => ({ ...f, consent: v }))}
            label="I agree to be contacted"
          />
          <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#5C5C5C', margin: 0, flex: 1 }}>
            I agree to be contacted by a Technossus representative regarding this request. Your data is never sold or shared.
          </p>
        </div>
      </div>

      {/* ── CTA Button ── */}
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 56,
          width: 202,
          padding: '16px 24px',
          backgroundColor: red,
          border: 'none',
          cursor: 'pointer',
          fontFamily: sans,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '28px',
          color: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        Let's Talk
      </button>
    </div>
  );
}

export default ContactFormPopUp;
