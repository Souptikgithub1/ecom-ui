import React from "react";
import ReactImageMagnify from "react-image-magnify";
import './ProductDetailsImg.css';
import {Skeleton} from "@mui/material";

const ProductDetailsImg = ({
                                selectedImg,
                                images,
                                setSelectedImg,
                                stripImgWidth='5rem',
                                imgConfig=
                                   {
                                       smallImage: {width: 480, height: 480},
                                       largeImage: {width: 900, height: 900}
                                   }
}) => {
  return <React.Fragment>
      {!!selectedImg
        ? <ReactImageMagnify
              hoverDelayInMs={0}
              hoverOffDelayInMs={0}
              enlargedImagePosition='over'
              fadeDurationInMs={400}
              {...{
                  smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      width: imgConfig.smallImage.width,
                      height: imgConfig.smallImage.height,
                      src: selectedImg
                  },
                  largeImage: {
                      src: selectedImg,
                      width: imgConfig.largeImage.width,
                      height: imgConfig.largeImage.height
                  }
              }} />
          : <Skeleton variant='rectangular' height={imgConfig.smallImage.height} width={imgConfig.smallImage.width} />}
      <div className="product-img-strip-container">
          {!!images ? images.map((img, i) =>
              <div
                  key={i}
                  className={'strip-img-container' + (img === selectedImg ? ' selected' : '')}
                  onClick={() => setSelectedImg(img)}
                  style={{width: stripImgWidth}}>
                  <img className='strip-img' src={img} alt="something"/>
              </div>) : [...new Array(5)].map((key, index) => <Skeleton className='strip-img-container' variant='rectangular' height={stripImgWidth} width={stripImgWidth} />) }
      </div>
  </React.Fragment>
}

export default ProductDetailsImg