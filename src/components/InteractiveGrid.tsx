import React, { useState } from 'react'

function InteractiveGrid() {

    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        {id: 1, text: "Increase Efficiency", image: 'public/1.png', description: 'Gangleri hóf svá mál sitt: "Hverr er æðstr eða elztr allra goða?" Hárr segir: "Sá heitir Alföðr at váru máli, en í Ásgarði inum forna átti hann tólf nöfn. Eitt er Alföðr, annat er Herran eða Herjan, þriðja er Nikarr eða Hnikarr, fjórða er Nikuðr eða Hnikuðr, fimmta Fjölnir, sétta Óski, sjaunda Ómi, átta Bifliði eða Biflindi, níunda Sviðurr, tíunda Sviðrir, ellifta Viðrir, tólfta Jálg eða Jálkr."'},
        {id: 2, text: "Decrease Injury", image: 'public/2.png', description: 'Gangleri hóf svá mál sitt: "Hverr er æðstr eða elztr allra goða?" Hárr segir: "Sá heitir Alföðr at váru máli, en í Ásgarði inum forna átti hann tólf nöfn. Eitt er Alföðr, annat er Herran eða Herjan, þriðja er Nikarr eða Hnikarr, fjórða er Nikuðr eða Hnikuðr, fimmta Fjölnir, sétta Óski, sjaunda Ómi, átta Bifliði eða Biflindi, níunda Sviðurr, tíunda Sviðrir, ellifta Viðrir, tólfta Jálg eða Jálkr."'},
        {id: 3, text: "Decrease Burnout", image: 'public/4.png', description: 'Gangleri hóf svá mál sitt: "Hverr er æðstr eða elztr allra goða?" Hárr segir: "Sá heitir Alföðr at váru máli, en í Ásgarði inum forna átti hann tólf nöfn. Eitt er Alföðr, annat er Herran eða Herjan, þriðja er Nikarr eða Hnikarr, fjórða er Nikuðr eða Hnikuðr, fimmta Fjölnir, sétta Óski, sjaunda Ómi, átta Bifliði eða Biflindi, níunda Sviðurr, tíunda Sviðrir, ellifta Viðrir, tólfta Jálg eða Jálkr."'},
        {id: 4, text: "Increase Control", image: 'public/5.png', description: 'Gangleri hóf svá mál sitt: "Hverr er æðstr eða elztr allra goða?" Hárr segir: "Sá heitir Alföðr at váru máli, en í Ásgarði inum forna átti hann tólf nöfn. Eitt er Alföðr, annat er Herran eða Herjan, þriðja er Nikarr eða Hnikarr, fjórða er Nikuðr eða Hnikuðr, fimmta Fjölnir, sétta Óski, sjaunda Ómi, átta Bifliði eða Biflindi, níunda Sviðurr, tíunda Sviðrir, ellifta Viðrir, tólfta Jálg eða Jálkr."'},
    ];

    const handleItemClick = (id) => {
        setSelectedItem(selectedItem === id ? null : id);
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
                  onClick={() => handleItemClick(item.id)}
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
                style={{ backgroundImage: `url(${item.image})` }}
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
}

export default InteractiveGrid