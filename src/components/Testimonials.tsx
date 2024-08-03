import { useEffect, useRef } from 'react';

const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Nurse',
      image: '/1.png',
      review: 'Nursify has transformed the way I work. The techniques are invaluable.',
      keyphrase: 'Superb!',
      rating: 5,
      fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
    },
    {
      id: 2,
      name: 'Halldor Hrafnkelsson',
      title: 'Doctor',
      image: '/5.png',
      review: 'Nursify has transformed the way I work. The techniques are invaluable.',
      keyphrase: 'Superb!',
      rating: 4,
      fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
    },
    {
      id: 3,
      name: 'Þorgeir Berharðsson',
      title: 'PT',
      image: '/path-to-image.jpg',
      review: 'Nursify has transformed the way I work. The techniques are invaluable.',
      keyphrase: 'Superb!',
      rating: 4,
      fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
    },
    {
      id: 4,
      name: 'Jóanna Egilsdóttir',
      title: 'NP',
      image: '/path-to-image.jpg',
      review: 'Nursify has transformed the way I work. The techniques are invaluable.',
      keyphrase: 'Superb!',
      rating: 3,
      fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
    },
    {
      id: 5,
      name: 'Sigmund Rafnsson',
      title: 'OT',
      image: '/path-to-image.jpg',
      review: 'Nursify has transformed the way I work. The techniques are invaluable.',
      keyphrase: 'Superb!',
      rating: 5,
      fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
    }
  ];

  
  function Testimonials() {
    const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 1;
    let scrollPosition = 0;

    function scrollCarousel() {
      if (carousel) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        scrollPosition = (scrollPosition + scrollAmount) % (maxScroll + 1);
        carousel.scrollLeft = scrollPosition;
        requestAnimationFrame(scrollCarousel);
      }
    }

    scrollCarousel();

    return () => cancelAnimationFrame(scrollCarousel);
  }, []);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; 
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="testimonials-carousel">
      <h3>
        What are people saying about <span className="highlight">Nursify</span>?
      </h3>
      <hr className="testimonial-divider" />
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrevClick}>❮</button>
        <div className="carousel-content" ref={carouselRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
            >
              <div className="testimonial-header">
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-title">{testimonial.title}</div>
                </div>
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
              </div>
              <p className="testimonial-review">{testimonial.review}</p>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNextClick}>❯</button>
      </div>
      <div className="testimonial-details">
        <h4>{testimonials[0].keyphrase}</h4>
        <p>{testimonials[0].fullReview}</p>
      </div>
    </div>
  );
}
  
  
  export default Testimonials