import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { testimonials } from '../data/testimonialsData';




const ScrollingReviews: React.FC = () => {
  const [activeTestimonialId, setActiveTestimonialId] = useState<number>(-1);
  const [fade, setFade] = useState<boolean>(false);
  const [pauseAnimation, setPauseAnimation] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!pauseAnimation) {
        setFade(true);
        setTimeout(() => {
          setActiveTestimonialId(prevId => {
            const currentIndex = testimonials.findIndex(testimonial => testimonial.id === prevId);
            return testimonials[(currentIndex + 1) % testimonials.length].id;
          });
          setFade(false);
        }, 500);
      }
    }, 5250); 

    return () => clearInterval(intervalId);
  }, [pauseAnimation]);

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');

        const scrollerInner = scroller.querySelector('.scroller-inner');
        if (!scrollerInner) return;

        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item, index) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);

          item.addEventListener('click', () => handleCardClick(testimonials[index % testimonials.length].id));
          duplicatedItem.addEventListener('click', () => handleCardClick(testimonials[index % testimonials.length].id));
        });
      });
    }

    setActiveTestimonialId(testimonials[3].id);
  }, []);

  useEffect(() => {
    const scrollerInner = document.querySelector('.scroller-inner');
    if (scrollerInner) {
      const allItems = scrollerInner.querySelectorAll('.testimonial-item');
      allItems.forEach((item, index) => {
        item.addEventListener('click', () => handleCardClick(testimonials[index % testimonials.length].id));
      });
    }
  }, [activeTestimonialId]);

  const activeTestimonial = testimonials.find(testimonial => testimonial.id === activeTestimonialId);

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'var(--accent-color)'
    },
  });

  const handleCardClick = (id: number) => {
    if (timer) clearTimeout(timer);

    setPauseAnimation(true);
    setFade(true);
    setTimeout(() => {
      setActiveTestimonialId(id);
      setFade(false);
      const newTimer = setTimeout(() => {
        setPauseAnimation(false);
      }, 7000); 
      setTimer(newTimer);
    }, 500);
  };

  return (
    <>
      <div className="testimonials-carousel">
        <h3>
          What are people saying about <span className="highlight">Nursify</span>?
        </h3>
        <hr className="testimonial-divider" />
      </div>
      <div className={`scroller ${pauseAnimation ? 'paused' : ''}`} data-speed="slow">
        <ul className="review-list scroller-inner">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <li
              key={index} // Use index as key to handle duplication
              className={`testimonial-item ${activeTestimonialId === testimonial.id ? 'active' : ''}`}
              onClick={() => handleCardClick(testimonial.id)}
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
                <StyledRating name="read-only" value={testimonial.rating} precision={0.5} size="medium" sx={{ color: 'var(--accent-color)' }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {activeTestimonial && (
        <div className={`active-testimonial-details ${fade ? 'fade-out' : 'fade-in'}`}>
          <h4 style={{ color: 'var(--accent-color)' }}>{activeTestimonial.keyphrase}</h4>
          <p>{activeTestimonial.fullReview}</p>
        </div>
      )}
    </>
  );
};

export default ScrollingReviews;