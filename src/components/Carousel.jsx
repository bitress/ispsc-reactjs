import React, { useState, useEffect } from 'react';
import imagesData from './../data/carousel.json';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleChangeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    // Auto-slide every 5 seconds (adjust as needed)
    const autoSlideInterval = setInterval(() => {
      const nextSlide = (currentSlide % imagesData.length) + 1;
      handleChangeSlide(nextSlide);
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(autoSlideInterval);
  }, [currentSlide]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="carousel">
          <ul className="slides">
            {imagesData.map((image, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="radio-buttons"
                  id={`img-${image.id}`}
                  checked={currentSlide === image.id}
                  onChange={() => handleChangeSlide(image.id)}
                />
                <li className="slide-container">
                  <div className="slide-image">
                    <img src={image.src} alt={`Slide ${image.id}`} />
                  </div>
                  <div className="carousel-controls">
                    <label
                      htmlFor={`img-${(image.id - 2 + imagesData.length) % imagesData.length + 1}`}
                      className="prev-slide"
                      onClick={() =>
                        handleChangeSlide(
                          (image.id - 2 + imagesData.length) % imagesData.length + 1
                        )
                      }
                    >
                      <span>&lsaquo;</span>
                    </label>
                    <label
                      htmlFor={`img-${image.id % imagesData.length + 1}`}
                      className="next-slide"
                      onClick={() => handleChangeSlide(image.id % imagesData.length + 1)}
                    >
                      <span>&rsaquo;</span>
                    </label>
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
