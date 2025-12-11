import React from 'react';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  consent?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

// Global configuration (Footer, Header, Form Labels)
export interface GlobalConfig {
  header: {
    brandName: string;
    whatsappUrl: string;
    instagramUrl: string;
  };
  form: {
    title: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      consent: { label: string };
    };
    button: {
      default: string;
      loading: string;
    };
    footer: string;
  };
  thankYou: {
    title: string;
    message: string;
    button: string;
  };
  footer: {
    copyright: string;
    links: {
      terms: string;
      privacy: string;
    };
  };
}

// Specific Car Configuration
export interface CarConfig {
  slug: string; // The URL part (e.g., 'kona', 'hb20')
  name: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: {
      prefix: string;
      highlight: string;
    };
    description: string;
    socialProof: string;
  };
  gallery: string[];
}