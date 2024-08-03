import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  text: string;
  image: string;
  description: string;
}

const items: Item[] = [
  { id: 1, text: 'Increase Efficiency', image: '/1.jpg', description: 'Gain valuable time through our proven techniques. Move patients safely without having to wait for a second, or third person to help. Get time added back into your day for all the other important work you do. Your time is too valuable to waste waiting for others to help when we can teach you to do this on your own.' },
  { id: 2, text: 'Decrease Injury', image: '/2.jpg', description: 'With simple and unique moves like the no-lift transfer we will save your back while reducing risk for any type of injury; for you as well as your patient. You only get ONE body and if you get hurt, you\'re either putting yourself at greater risk of bigger injury or limiting your ability to help all your current and future patients.' },
  { id: 3, text: 'Decrease Burnout', image: '/3.jpg', description: 'Nurses can have an overwhelming amount of responsibilities. We will teach you how to protect yourself physically and mentally from the increasing demands you have on a daily basis. The newest, hardest and most talented nurses are the most vulnerable to burnout. Let us help you avoid it!' },
  { id: 4, text: 'Increase Control', image: '/4.jpg', description: 'Any given day for a nurse can be full of stress and feel out of control. Call lights, alarms, demanding patients, supervisors, charting, and so much more adds to the chaos that can be your life. Our techniques will support your growth, help you feel like a champion and offer ongoing support to unlock your abilities to gain confidence and control.' }
];

const InteractiveGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setSelectedItem(prevItem => {
          if (prevItem === null) return items[0].id;
          const currentIndex = items.findIndex(item => item.id === prevItem);
          return items[(currentIndex + 1) % items.length].id;
        });
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseEnter = (id: number) => {
    setSelectedItem(id);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="interactive-grid">
      <div className="left-column">
        <h3>Why Nursify?</h3>
        <ul>
          {items.map(item => (
            <li
              key={item.id}
              className={selectedItem === item.id ? 'active' : ''}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        {items.map(item => (
          <div
            key={item.id}
            className={`image-container ${selectedItem === item.id ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.image})`, display: selectedItem === item.id ? 'block' : 'none' }}
          >
            {selectedItem === item.id && (
              <div className="overlay">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveGrid;
