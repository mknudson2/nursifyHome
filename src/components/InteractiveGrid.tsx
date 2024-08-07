import { useState, useEffect } from 'react';

interface Item {
    id: number;
    text: string;
    image: string;
    description: string;
}

const universityItems: Item[] = [
    { id: 1, text: 'Exceed Expectations', image: '/1.jpg', description: '...' },
    { id: 2, text: 'Save Your Students', image: '/2.jpg', description: '...' },
    { id: 3, text: 'Flexible Financing', image: '/3.jpg', description: '...' },
    { id: 4, text: 'Fortify Their Future', image: '/4.jpg', description: '...' },
];

const employerItems: Item[] = [
    { id: 1, text: 'Improve Patient Satisfaction', image: '/1.jpg', description: '...' },
    { id: 2, text: 'Improve Moral', image: '/2.jpg', description: '...' },
    { id: 3, text: 'Reduce Nurse Burnout', image: '/3.jpg', description: '...' },
    { id: 4, text: 'Reduce Staff Turnover', image: '/4.jpg', description: '...' },
    { id: 5, text: 'Reduce Workplace Injury', image: '/5.jpg', description: '...' },
];

const studentItems: Item[] = [
    { id: 1, text: 'Increase Efficiency', image: '/1.jpg', description: 'Gain valuable time through our proven techniques. Move patients safely without having to wait for a second, or third person to help. Get time added back into your day for all the other important work you do. Your time is too valuable to waste waiting for others to help when we can teach you to do this on your own.' },
    { id: 2, text: 'Increase Control', image: '/4.jpg', description: "With simple and unique moves like the no-lift transfer we will save your back while reducing risk for any type of injury; for you as well as your patient. You only get ONE body and if you get hurt, you're either putting yourself at greater risk of bigger injury or limiting your ability to help all your current and future patients." },
    { id: 3, text: 'Reduce Injury', image: '/2.jpg', description: "Nurses can have an overwhelming amount of responsibilities. We will teach you how to protect yourself physically and mentally from the increasing demands you have on a daily basis. The newest, hardest and most talented nurses are the most vulnerable to burnout. Let us help you avoid it!" },
    { id: 4, text: 'Reduce Burnout', image: '/3.jpg', description: "Any given day for a nurse can be full of stress and feel out of control. Call lights, alarms, demanding patients, supervisors, charting, and so much more adds to the chaos that can be your life. Our techniques will support your growth, help you feel like a champion and offer ongoing support to unlock your abilities to gain confidence and control." },
];

interface InteractiveGridProps {
    category: string;
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ category }) => {
    const [items, setItems] = useState<Item[]>(universityItems);
    const [selectedItem, setSelectedItem] = useState<number>(1);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        switch (category) {
            case 'University Administrations':
                setItems(universityItems);
                break;
            case 'Employers':
                setItems(employerItems);
                break;
            case 'Students & Clinicians':
                setItems(studentItems);
                break;
            default:
                setItems(universityItems);
                break;
        }
    }, [category]);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setSelectedItem(prevItem => {
                    const currentIndex = items.findIndex(item => item.id === prevItem);
                    return items[(currentIndex + 1) % items.length].id;
                });
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isHovered, items]);

    const handleItemClick = (id: number) => {
        setSelectedItem(id);
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 10000);
    };

    return (
        <div className="interactive-grid">
            <div className="left-column">
                <h3>Why <span className="highlight">Nursify?</span></h3>
                <ul>
                    {items.map(item => (
                        <li
                            key={item.id}
                            className={item.id === selectedItem ? 'active' : ''}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => handleItemClick(item.id)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right-column">
                {items.map(item => (
                    <div key={item.id} className={`image-container ${item.id === selectedItem ? 'active' : ''}`} style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="overlay">{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveGrid;
