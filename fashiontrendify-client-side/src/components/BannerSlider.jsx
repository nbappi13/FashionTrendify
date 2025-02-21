import React, { useState, useEffect } from 'react';
import '../styles/Banner.css'; 

const images = [
    'https://i.imgur.com/eYMfLrb.jpg',
    'https://i.imgur.com/2SIFk3I.jpg',
    'https://i.imgur.com/Z9GGkL0.jpg',
    'https://i.imgur.com/pniiyfe.jpg'
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default BannerSlider;