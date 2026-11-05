import { useState } from 'react';

import testimonials from './data';

import Testimonial from './components/Testimonial';
import Controls from './components/Controls';

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(
      (currentIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length)
      % testimonials.length
    );
  };

  const randomTestimonial = () => {

    if (testimonials.length <= 1) {
      return;
    }

    let randomIndex;

    do {
      randomIndex = Math.floor(
        Math.random() * testimonials.length
      );

    } while (randomIndex === currentIndex);

    setCurrentIndex(randomIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <main className="app-container">

      <header className="app-header">
        <h1>Nuestros testimonios</h1>

        <p>
          Conoce las experiencias de nuestros usuarios.
        </p>
      </header>

      {currentTestimonial ? (
        <Testimonial item={currentTestimonial} />
      ) : (
        <p className="empty-message">
          No hay testimonios disponibles.
        </p>
      )}

      {testimonials.length > 0 && (
        <>
          <p className="counter">
            {currentIndex + 1} de {testimonials.length}
          </p>

          <Controls
            onPrev={prevTestimonial}
            onNext={nextTestimonial}
            onRandom={randomTestimonial}
          />
        </>
      )}

    </main>
  );
}

export default App;