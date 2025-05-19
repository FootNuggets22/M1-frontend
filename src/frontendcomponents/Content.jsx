import React, { useState } from 'react';
import './Content.css';
import heroImage from '../assets/tinaFromTurners.jpg';
import image1 from '../assets/turnersBlue.png'
import image2 from '../assets/turnersFullLogo.png'
import image3 from '../assets/tinaFromTurners.jpg'

function Content() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      image: image1,
      title: "We're no strangers to love",
      subtitle: "You know the rules and so do I. A full commitment's what I'm thinkin' of, you wouldnt get this from any other guy. I just wanna tell you how i'm feeling, Gotta make you understand.",
    },
    {
      image: image2,
      title: 'Never gonna give you up',
      subtitle: "Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna say goodbye. Never gonna tell a lie and hurt you",
    },
    {
      image: image3,
      title: "We've known each other for so long",
      subtitle: "Your heart's been aching, but you're too shy to say it. Inside, we both know what's been going on. We know the game and we're gonna play it. And if you ask me how I'm feeling. Don't tell me you're too blind to see",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Turners<br />Terrific Tech</h1>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index} onClick={() => setSelectedCard(card)}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCard.image} alt={selectedCard.title} />
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.subtitle}</p>
            <button onClick={() => setSelectedCard(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
