import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    image: string;
    review: string;
    keyphrase: string;
    rating: number;
    fullReview: string;
  }

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Orson Krennic',
    title: 'Director',
    image: '/krennic.jpg',
    review: 'Nursify has transformed the way I work. The techniques are invaluable.',
    keyphrase: '"Excellent!"',
    rating: 5,
    fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
  },
  {
    id: 2,
    name: 'Halldor Hrafnkelsson',
    title: 'Doctor',
    image: '/5.png',
    review: 'Nursify has transformed the way I work. The techniques are invaluable.',
    keyphrase: '"Well worth it!"',
    rating: 4,
    fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
  },
  {
    id: 3,
    name: 'Þorgeir Berharðsson',
    title: 'PT',
    image: '/1.png',
    review: 'Nursify has transformed the way I work. The techniques are invaluable.',
    keyphrase: '"Superb!"',
    rating: 4,
    fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
  },
  {
    id: 4,
    name: 'Jóanna Egilsdóttir',
    title: 'NP',
    image: '/deathTrooper.avif',
    review: 'Nursify has transformed the way I work. The techniques are invaluable.',
    keyphrase: '"Exactly What We Needed"',
    rating: 3,
    fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
  },
  {
    id: 5,
    name: 'Sigmund Rafnsson',
    title: 'OT',
    image: '/crosshair.webp',
    review: 'Nursify has transformed the way I work. The techniques are invaluable.',
    keyphrase: '"Frábært!"',
    rating: 5,
    fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
  },
  {
    id: 6,
    name: 'Hárekr Héðinsson',
    title: 'Wizard',
    image: '/revan.jpeg',
    review: 'Nursify has transformed the way I work. The techniques are invaluable.',
    keyphrase: '"Superb!"',
    rating: 5,
    fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
  },
  {
    id: 7,
    name: 'Thrawn',
    title: 'Grand Admiral',
    image: '/thrawn.jpg',
    review: 'Nursify has transformed the way I work. The techniques are invaluable.',
    keyphrase: '"Beyond Praise"',
    rating: 5,
    fullReview: 'Nursify has transformed the way I work. The techniques are invaluable. I have been able to save so much time and reduce my risk of injury thanks to the expert guidance provided by Nursify.'
  }
];

const ScrollingReviews: React.FC = () => {
    const [activeTestimonialId, setActiveTestimonialId] = useState<number>(testimonials[0].id);
    const [fade, setFade] = useState<boolean>(false);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setActiveTestimonialId(prevId => {
            const currentIndex = testimonials.findIndex(testimonial => testimonial.id === prevId);
            return testimonials[(currentIndex + 1) % testimonials.length].id;
          });
          setFade(false);
        }, 500); // Adjusts the timeout to match the animation duration
      }, 10000); // Controls the duration a card remains active
  
      return () => clearInterval(intervalId);
    }, []);
  
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
  
          scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }, []);
  
    const activeTestimonial = testimonials.find(testimonial => testimonial.id === activeTestimonialId);

    const StyledRating = styled(Rating) ({
        '& .MUIRating-iconFilled': {
            color: 'var(--accent-color)'

        },
    })
  
    return (
      <>
        <div className="testimonials-carousel">
          <h3>
            What are people saying about <span className="highlight">Nursify</span>?
          </h3>
          <hr className="testimonial-divider" />
        </div>
        <div className="scroller" data-speed="slow">
          <ul className="review-list scroller-inner">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.id}
                className={`testimonial-item ${activeTestimonialId === testimonial.id ? 'active' : ''}`}
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setActiveTestimonialId(testimonial.id);
                    setFade(false);
                  }, 500); // Adjust the timeout to match the animation duration
                }}
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