import { useEffect } from 'react';

const NursifyCertification: React.FC = () => {
  useEffect(() => {
    const certificationContainer = document.querySelector('.certification-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1 // Adjust threshold to trigger animation sooner or later
    });

    if (certificationContainer) {
      observer.observe(certificationContainer);
    }

    // Cleanup observer on unmount
    return () => {
      if (certificationContainer) {
        observer.unobserve(certificationContainer);
      }
    };
  }, []);

  return (
    <>
      <div className="certification-bg">
        <div className="certification-container">
          <div className="header-container">
            <h3>
              Unlock Your <span className="highlight">Potential</span> - Nursify Certification
            </h3>
          </div>
          <div className="certification-content-container">
            <p>
              As a nurse, you're a hero to so many of the lives you touch. But what if we told you there’s a way to elevate your impact even further? Earning our <span className="highlight">Nursify Certification</span> indicates your mastery of transfers and mobility to the people around you.
            </p>
            <br />
            <p>
              Prove to employers you have the skills, talent and expertise to deliver patient care better than most. This certification showcases your commitment to excellence, top-notch patient care and most importantly your safety & the safety of your patients.
            </p>
            <br />
            <p>
              Consider this your exclusive invitation to <span className="highlight">invest in yourself</span>—not just for your career, but for the lives you touch every day. It’s time to take the next big step forward on your journey of growth and fulfillment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NursifyCertification;
