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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // Real-time validation
  useEffect(() => {
    const isNameValid = validateName(formData.name);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);
    const isConsentValid = formData.consent;

    setIsFormValid(isNameValid && isEmailValid && isPhoneValid && isConsentValid);

    // Update error messages only if field was touched
    const newErrors: FormErrors = {};
    if (touched.name && !isNameValid) newErrors.name = "Por favor, digite um nome válido.";
    if (touched.email && !isEmailValid) newErrors.email = "Digite um e-mail válido.";
    if (touched.phone && !isPhoneValid) newErrors.phone = "Telefone inválido (mínimo 10 dígitos).";
    if (touched.consent && !isConsentValid) newErrors.consent = "Você precisa concordar para continuar.";
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFormValid) {
      setIsSubmitting(true);

      try {
        // Envio para o Webhook do Zapier
        // Usamos mode: 'no-cors' para garantir que o request saia do navegador sem erros de CORS
        await fetch('https://hooks.zapier.com/hooks/catch/921122/ufq6nw8/', {
          method: 'POST',
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString()
          }),
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // Redireciona para a página de obrigado
        window.location.href = '/obrigado';
        
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.');
        setIsSubmitting(false);
      }
    } else {
      // Mark all fields as touched to show errors
      setTouched({
        name: true,
        email: true,
        phone: true,
        consent: true
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100"
      noValidate
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Receba a melhor oferta</h2>
      
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
        disabled={isSubmitting}
      />

      <Input
        id="email"
        name="email"
        label="E-mail"
        type="email"
        inputMode="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        placeholder="seu@email.com"
        autoComplete="email"
        required
        disabled={isSubmitting}
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
        disabled={isSubmitting}
      />

      <div className="mt-6 mb-6">
        <label className="flex items-start cursor-pointer group">
          <div className="relative flex items-center mt-0.5">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`peer h-5 w-5 cursor-pointer appearance-none rounded border shadow-sm transition-all focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 ${errors.consent ? 'border-red-500' : 'border-slate-300 checked:border-brand-600 checked:bg-brand-600'}`}
            />
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white w-3.5 h-3.5"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={`ml-3 text-sm transition-colors ${errors.consent ? 'text-red-600' : 'text-slate-600 group-hover:text-slate-900'}`}>
            Concordo em receber  contato para a melhor oferta.
          </span>
        </label>
        {errors.consent && (
           <p className="mt-1 text-sm text-red-600 pl-8" role="alert">
             {errors.consent}
           </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full py-4 px-6 rounded-lg font-bold text-lg shadow-sm transition-all duration-200 
          focus:outline-none focus:ring-4 focus:ring-brand-500/50 
          ${isSubmitting 
            ? 'bg-brand-400 cursor-not-allowed opacity-80' 
            : 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-md transform hover:-translate-y-0.5'}
        `}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : (
          "Receber oferta"
        )}
      </button>
      
      <p className="mt-4 text-xs text-center text-slate-400">
        Seus dados estão protegidos.
      </p>
    </form>
  );
};

export default ContactForm;