import React, { useState, useEffect, useCallback } from 'react';
import Input from './Input';
import { FormData, FormErrors } from '../types';
import { maskName, maskPhone, validateEmail, validateName, validatePhone } from '../utils/formHelpers';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    consent: false
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // Real-time validation
  useEffect(() => {
    const isNameValid = validateName(formData.name);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);
    const isConsentValid = formData.consent;

    setIsFormValid(isNameValid && isEmailValid && isPhoneValid && isConsentValid);

    // Update error messages only if field was touched to avoid premature shouting
    const newErrors: FormErrors = {};
    if (touched.name && !isNameValid) newErrors.name = "Por favor, digite um nome válido.";
    if (touched.email && !isEmailValid) newErrors.email = "Digite um e-mail válido.";
    if (touched.phone && !isPhoneValid) newErrors.phone = "Telefone inválido (mínimo 10 dígitos).";
    
    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    let finalValue = value;

    // Apply masks
    if (name === 'name') {
      finalValue = maskName(value);
    } else if (name === 'phone') {
      finalValue = maskPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : finalValue
    }));
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // Simulate API call
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in"
        role="alert"
      >
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Cadastro realizado!</h3>
        <p className="text-green-800">
          Obrigado, {formData.name.split(' ')[0]}. Entraremos em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100"
      noValidate
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Garanta sua vaga</h2>
      
      <Input
        id="name"
        name="name"
        label="Nome completo"
        type="text"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        placeholder="Seu nome"
        autoComplete="name"
        required
      />

      <Input
        id="email"
        name="email"
        label="E-mail profissional"
        type="email"
        inputMode="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        placeholder="seu@email.com"
        autoComplete="email"
        required
      />

      <Input
        id="phone"
        name="phone"
        label="Telefone (WhatsApp)"
        type="tel"
        inputMode="numeric"
        value={formData.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.phone}
        placeholder="(00) 00000-0000"
        autoComplete="tel"
        maxLength={15}
        required
      />

      <div className="mt-6 mb-6">
        <label className="flex items-start cursor-pointer group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow-sm transition-all checked:border-brand-600 checked:bg-brand-600 focus:ring-2 focus:ring-brand-500 focus:ring-offset-1"
            />
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white w-3.5 h-3.5"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="ml-3 text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
            Concordo em receber comunicações e ofertas exclusivas.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`
          w-full py-4 px-6 rounded-lg font-bold text-lg shadow-sm transition-all duration-200
          focus:outline-none focus:ring-4 focus:ring-brand-500/50
          ${isFormValid 
            ? 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-md transform hover:-translate-y-0.5' 
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
        `}
      >
        Quero Acessar Agora
      </button>
      
      <p className="mt-4 text-xs text-center text-slate-400">
        Seus dados estão seguros. Não enviamos spam.
      </p>
    </form>
  );
};

export default ContactForm;