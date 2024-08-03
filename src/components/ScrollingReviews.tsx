import React, { useEffect } from 'react';


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
    <div className="scroller" data-speed="slow">
      <ul className="review-list scroller-inner">
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
        <li>Review 4</li>
        <li>Review 5</li>
        <li>Review 6</li>
        <li>Review 7</li>
        <li>Review 8</li>
        <li>Review 9</li>
        <li>Review 10</li>
        <li>Review 11</li>
        <li>Review 12</li>
        <li>Review 13</li>
        <li>Review 14</li>
      </ul>
    </div>
  );
}

export default ScrollingReviews;
