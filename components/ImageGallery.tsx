import React, { useState, useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const startX = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // If no images provided, show fallback
  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX.current;
    setCurrentTranslate(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    const threshold = 50; 
    
    if (currentTranslate < -threshold) {
      nextSlide();
    } else if (currentTranslate > threshold) {
      prevSlide();
    }
    
    setCurrentTranslate(0);
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className="relative w-full h-full group bg-slate-900 overflow-hidden touch-pan-y"
      ref={sliderRef}
    >
      <div 
        className="w-full h-full flex"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'none' : 'transform 300ms ease-out',
          transform: `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}px))`
        }}
      >
        {images.map((url, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative select-none">
            <img
              src={url}
              alt={`Galeria imagem ${index + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              onDragStart={handleDragStart}
              // Performance Optimizations for LCP
              loading={index === 0 ? "eager" : "lazy"}
              // @ts-ignore - React 19 supports fetchPriority but types might lag
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="hidden lg:block absolute top-[50%] -translate-y-1/2 left-4 z-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-brand-600/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Imagem anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:block absolute top-[50%] -translate-y-1/2 right-4 z-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-brand-600/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Próxima imagem"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full shadow-sm ${
              currentIndex === index 
                ? 'bg-white w-8 h-2' 
                : 'bg-white/50 w-2 h-2 hover:bg-white/80'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;