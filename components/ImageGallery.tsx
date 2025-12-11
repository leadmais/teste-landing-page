import React, { useState, useRef } from 'react';

const IMAGES = [
  "https://picsum.photos/800/600?random=10",
  "https://picsum.photos/800/600?random=11",
  "https://picsum.photos/800/600?random=12",
  "https://picsum.photos/800/600?random=13",
  "https://picsum.photos/800/600?random=14"
];

const ImageGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const startX = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? IMAGES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === IMAGES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Drag / Swipe Logic (Unified for Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    // Capture pointer to track movement even if it leaves the container visually
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

    const threshold = 50; // Minimum distance to trigger slide change
    
    if (currentTranslate < -threshold) {
      nextSlide();
    } else if (currentTranslate > threshold) {
      prevSlide();
    }
    
    // Reset translation to snap back or snap to new slide
    setCurrentTranslate(0);
  };

  // Prevent default image drag behavior (ghost image)
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className="relative w-full h-full group bg-slate-100 overflow-hidden touch-pan-y"
      ref={sliderRef}
    >
      {/* Main Image Container */}
      <div 
        className="w-full h-full flex"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp} // Safety: cancel drag if pointer leaves abruptly
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          // Disable transition while dragging for instant response, enable it for snapping
          transition: isDragging ? 'none' : 'transform 300ms ease-out',
          // Calculate position: - (Index * 100%) + DragOffset
          transform: `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}px))`
        }}
      >
        {IMAGES.map((url, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative select-none">
            <img
              src={url}
              alt={`Galeria imagem ${index + 1}`}
              className="w-full h-full object-cover pointer-events-none" // pointer-events-none ensures the div captures the events, not the img
              onDragStart={handleDragStart}
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Left Arrow (Desktop) */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute top-[50%] -translate-y-1/2 left-4 z-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-brand-600/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Imagem anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Arrow (Desktop) */}
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute top-[50%] -translate-y-1/2 right-4 z-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-brand-600/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Próxima imagem"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {IMAGES.map((_, index) => (
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