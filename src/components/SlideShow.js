import React, { useState, useEffect } from 'react';
import '../css/SlideShow.css'; // import CSS file for styling

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0); // state to track current slide

  const slides = [
    // { image: 'https://curius.de/wp-content/uploads/2020/12/wallet-1021x580.jpg', caption: 'Slide 1' },
    { image: 'https://www.tecnobreak.com/wp-content/uploads/1682354627_i614324.jpeg', caption: 'Slide 1' },
    { image: 'https://timeandupdate.com/wp-content/uploads/2017/11/e-banking-button.jpg', caption: 'Slide 2' },
    { image: 'http://cdn.mos.cms.futurecdn.net/tBmufcMBh4cNJtsQa67yc5.jpg', caption: 'Slide 3' },
  ];

  useEffect(() => {
    // set interval to change slide every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);

    // cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
        >
          <img src={slide.image} alt={slide.caption} />
          <div className="caption">{slide.caption}</div>
        </div>
      ))}
    </div>
  );
}

export default Slideshow;