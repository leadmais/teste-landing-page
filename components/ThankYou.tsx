import React from 'react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-slate-100 animation-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Solicitação Enviada!</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Recebemos seu interesse no Novo Hyundai KONA.<br/>
          Um de nossos consultores entrará em contato via WhatsApp em breve para confirmar seu agendamento.
        </p>
        
        <a 
          href="/"
          className="inline-block w-full sm:w-auto bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-500/50"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default ThankYou;