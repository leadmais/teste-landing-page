import React from 'react';
import { cars, globalConfig } from '../config';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-brand-900 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{globalConfig.header.brandName}</h1>
        <p className="text-brand-100">Escolha o seu próximo carro</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(cars).map((car) => (
            <div key={car.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="aspect-[16/9] w-full relative">
                <img 
                  src={car.gallery[0]} 
                  alt={car.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {car.hero.badge}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{car.name}</h2>
                <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow">
                  {car.hero.description}
                </p>
                
                <a 
                  href={`/${car.slug}`}
                  className="w-full block text-center bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-brand-600 transition-colors"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

       <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {globalConfig.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;