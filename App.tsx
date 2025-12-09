import React from 'react';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">NextLevel</span>
          </div>
        </div>
      </header>

      {/* Main Content - Hero Section */}
      <main className="flex-grow flex items-center justify-center py-12 lg:py-24">
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="order-1 lg:order-1 space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-2">
                🚀 Oportunidade Limitada
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Transforme sua Carreira com <span className="text-brand-600">Alta Performance</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Descubra o método comprovado para acelerar seus resultados em tempo recorde. Junte-se a mais de 10.000 profissionais.
              </p>
              
              <div className="pt-4 hidden lg:block">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                     {/* Decorative avatars using placeholders */}
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=1" alt="" loading="lazy" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=2" alt="" loading="lazy" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=3" alt="" loading="lazy" />
                  </div>
                  <p>+500 alunos inscritos hoje</p>
                </div>
              </div>
            </div>

            {/* Right Column: Image & Form (Mobile Friendly Order) */}
            <div className="order-2 lg:order-2 flex flex-col gap-8">
              {/* Highlight Image - Hidden on very small screens if needed, but requested in prompt */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[4/3] group">
                <img 
                  src="https://picsum.photos/800/600" 
                  alt="Profissional alcançando alta performance em ambiente de trabalho moderno" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width="800"
                  height="600"
                  loading="lazy" 
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden flex items-end p-6">
                  <p className="text-white font-medium">Potencialize seus resultados hoje mesmo.</p>
                </div>
              </div>

              {/* Call to Action Form */}
              <div className="relative z-10 -mt-0 lg:-mt-0 lg:ml-0">
                 <ContactForm />
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NextLevel Solutions. Todos os direitos reservados.
          </p>
          <div className="mt-2 flex justify-center gap-4 text-xs text-slate-400">
            <a href="#" className="hover:text-brand-600 transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-600 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;