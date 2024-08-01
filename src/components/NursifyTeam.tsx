import React, { useState } from 'react'

function NursifyTeam() {
    const [activeMember, setActiveMember] = useState<'Philip' | 'Jason'>('Philip');

    const members = {
        Philip: {
            name: 'Philip Lamoreaux',
            image: '/phil.jpg',
            bio: ' is a dedicated professional with a passion for healthcare. With years of experience, Philip brings a wealth of knowledge and expertise to the team. Gangleri hóf svá mál sitt: "Hverr er æðstr eða elztr allra goða?" Hárr segir: "Sá heitir Alföðr at váru máli, en í Ásgarði inum forna átti hann tólf nöfn. Eitt er Alföðr, annat er Herran eða Herjan, þriðja er Nikarr eða Hnikarr, fjórða er Nikuðr eða Hnikuðr, fimmta Fjölnir, sétta Óski, sjaunda Ómi, átta Bifliði eða Biflindi, níunda Sviðurr, tíunda Sviðrir, ellifta Viðrir, tólfta Jálg eða Jálkr." Þá spyrr Gangleri: "Hvar er sá guð, eða hvat má hann, eða hvat hefir hann unnit framaverka?" Hárr segir: "Lifir hann of allar aldir ok stjórnar öllu ríki sínu ok ræðr öllum hlutum, stórum ok smám." Þá mælir Jafnhárr: "Hann smíðaði himin ok jörð ok loftin ok alla eign þeira."',
        },
        Jason: {
            name: 'Jason Freed',
            image: '/jason.webp', 
            bio: ' is a seasoned expert in the healthcare field. Jason\'s dedication and commitment to excellence make him an invaluable member of the team. Gangleri hóf svá mál sitt: "Hverr er æðstr eða elztr allra goða?" Hárr segir: "Sá heitir Alföðr at váru máli, en í Ásgarði inum forna átti hann tólf nöfn. Eitt er Alföðr, annat er Herran eða Herjan, þriðja er Nikarr eða Hnikarr, fjórða er Nikuðr eða Hnikuðr, fimmta Fjölnir, sétta Óski, sjaunda Ómi, átta Bifliði eða Biflindi, níunda Sviðurr, tíunda Sviðrir, ellifta Viðrir, tólfta Jálg eða Jálkr." Þá spyrr Gangleri: "Hvar er sá guð, eða hvat má hann, eða hvat hefir hann unnit framaverka?" Hárr segir: "Lifir hann of allar aldir ok stjórnar öllu ríki sínu ok ræðr öllum hlutum, stórum ok smám." Þá mælir Jafnhárr: "Hann smíðaði himin ok jörð ok loftin ok alla eign þeira."',
        }
    };

    return (
        <div className="nursify-team">
            <h3><span className="highlight">Meet</span> Your Nursify Team</h3>
            <div className="toggle-switch">
                <div
                    className="toggle-background"
                    style={{
                        transform: activeMember === 'Philip' ? 'translateX(0)' : 'translateX(100%)'
                    }}
                />
                <span
                    className={`toggle-option ${activeMember === 'Philip' ? 'active' : ''}`}
                    onClick={() => setActiveMember('Philip')}
                >
                    Philip Lamoreaux
                </span>
                <span
                    className={`toggle-option ${activeMember === 'Jason' ? 'active' : ''}`}
                    onClick={() => setActiveMember('Jason')}
                >
                    Jason Freed
                </span>
            </div>
            <div className="team-content">
                <div className="image-column">
                    <img src={members[activeMember].image} alt={members[activeMember].name} />
                </div>
                <div className="bio-column">
                    <p><span className="highlight">{members[activeMember].name}</span> {members[activeMember].bio}</p>
                </div>
            </div>
        </div>
    );
}

export default NursifyTeam