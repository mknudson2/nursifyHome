import { useState } from 'react';

interface ExperienceButtonsProps {
    onChange: (category: string) => void;
}

const ExperienceButtons: React.FC<ExperienceButtonsProps> = ({ onChange }) => {
    const [activeCategory, setActiveCategory] = useState<string>('University Administrations');

    const handleToggle = (category: string) => {
        setActiveCategory(category);
        onChange(category);
    };

    return (
        <div className="exp-toggle-switch">
            <div
                className={`exp-toggle-option ${activeCategory === 'University Administrations' ? 'active' : ''}`}
                onClick={() => handleToggle('University Administrations')}
            >
                University Administrations
            </div>
            <div
                className={`exp-toggle-option ${activeCategory === 'Employers' ? 'active' : ''}`}
                onClick={() => handleToggle('Employers')}
            >
                Employers
            </div>
            <div
                className={`exp-toggle-option ${activeCategory === 'Students & Clinicians' ? 'active' : ''}`}
                onClick={() => handleToggle('Students & Clinicians')}
            >
                Students & Clinicians
            </div>
            <div className="exp-toggle-background" style={{ transform: `translateX(${activeCategory === 'University Administrations' ? '0%' : activeCategory === 'Employers' ? '100%' : '195%'})` }} />
        </div>
    );
};

export default ExperienceButtons;
