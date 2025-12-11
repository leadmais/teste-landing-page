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