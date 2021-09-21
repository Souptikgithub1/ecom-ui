import {Carousel} from "react-bootstrap";

import image1 from '../../assets/imgs/slide1.jpg';
import image2 from '../../assets/imgs/slide2.jpg';

import {useState} from "react";

import './BannerCarousel.css';

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          {[image1, image2].map(img => <Carousel.Item interval='3000'>
              <img
                  className="d-block w-100"
                  src={img}
                  alt="First slide"
              />
            <div className="carousel-content">
              <div className='shop-now'>Shop now</div>
            </div>
          </Carousel.Item>)}

      </Carousel>
  );
}

export default BannerCarousel