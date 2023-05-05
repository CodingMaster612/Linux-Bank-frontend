import React, { useState, useEffect } from 'react';
import '../css/SlideShow.css'; // import CSS file for styling

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0); // state to track current slide

  const slides = [
    { image: 'https://wonderfulengineering.com/wp-content/uploads/2014/06/Linux-wallpapers-16.jpg', caption: 'Slide 1' },
    { image: 'https://tse1.mm.bing.net/th?id=OIP.2Rjv80KIhgjfkFlUX2ashAHaEH&pid=Api&P=0', caption: 'Slide 2' },
    { image: 'https://i.kinja-img.com/gawker-media/image/upload/s--1IbYcQm2--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/zj42kn2xzlivgllfpa2u.jpg', caption: 'Slide 3' },
    { image: 'https://cdn.wallpapersafari.com/26/70/2SoEny.jpg', caption: 'Slide 4' },
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