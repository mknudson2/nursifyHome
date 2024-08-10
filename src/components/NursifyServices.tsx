import { useEffect } from 'react';


const NursifyServices: React.FC = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.service-image');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1 
    });

    images.forEach(image => {
      observer.observe(image);
    });

    return () => {
      images.forEach(image => {
        observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div className="services-container">
      <h3 className="services-header">
        Our <span className="highlight">Services</span>
      </h3>
      <div className="service-row">
        <div className="service-text">
          <h4>Basic Patient Mobility</h4>
          <p>
            Begin your transformative journey HERE. This 9-module course educates you on moving your patients safely in and out of bed with ease. Each module identifies the fundamental strategies to save you time & energy while protecting you from injury, burnout & imposter syndrome. Nurses in every setting are expected to perform these tasks, but so few are formally trained. Welcome to Nursify!
          </p>
        </div>
        <div className="service-image-container">
          <img src="/mobility.webp" alt="Service Image 1" className="service-image" />
        </div>
      </div>
      <div className="service-row">
        <div className="service-image-container">
          <img src="/certified.jpg" alt="Service Image 2" className="service-image" />
        </div>
        <div className="service-text">
          <h4>Get Certified with Nursify</h4>
          <p>
            Our passion is empowering, educating and training nurses so they can achieve new heights they didn't think were possible in the hope that they can do the same for their patients. Show your employer you have a skillset very few nurses ever formally acquired. By completing our 9-module course, you'll receive our official certification that proves you can transfer and move patient's better than most.
          </p>
        </div>
      </div>
      <div className="service-row">
        <div className="service-text">
          <h4>Nursing Programs - Your Competitive Advantage!</h4>
          <p>
            Research indicates most nurses aren't receiving enough training on the clinical or soft skills required to optimally perform their jobs. We have created the solution and are ready to flexibly integrate it into your curriculums while minding your budget! Find a flexible plan for your University, Hospital, or Team. Students and faculty all the way to veteran nurses will be equipped for success better than ever. Nursify supports our members every step of the way.
          </p>
        </div>
        <div className="service-image-container">
          <img src="/nurses.jpg" alt="Service Image 3" className="service-image" />
        </div>
      </div>
    </div>
  );
};

export default NursifyServices;
