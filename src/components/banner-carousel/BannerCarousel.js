import React from "react";
import {Carousel} from "react-bootstrap";

import image1 from '../../assets/imgs/slide1.jpg';
import image2 from '../../assets/imgs/slide2.jpg';

import {useState} from "react";

import './BannerCarousel.css';
import {Skeleton} from "@mui/material";

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  const [isImgLoaded, setImgLoaded] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          {[image1, image2].map((img, i) => <Carousel.Item key={i} interval='5000' style={{height: '1195px'}}>
            {!isImgLoaded && <Skeleton variant='rectangular' width='100%' height='1195px' />}
            <React.Fragment>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                    onLoad={e => setImgLoaded(true)}
                />
              {!!isImgLoaded && <div className="carousel-content">
                <div className='shop-now'>Shop now</div>
              </div> }
              </React.Fragment>
          </Carousel.Item>)}

      </Carousel>
  );
}

export default BannerCarousel