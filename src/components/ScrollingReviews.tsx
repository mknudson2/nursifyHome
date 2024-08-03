import React, { useEffect } from 'react';

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

function ScrollingReviews() {
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

  return (
    <>
    <div className="testimonials-carousel">
      <h3>
        What are people saying about <span className="highlight">Nursify</span>?
      </h3>
      <hr className="testimonial-divider" /> </div>
    <div className="scroller" data-speed="slow">
      <ul className="review-list scroller-inner">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
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
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default ScrollingReviews;
