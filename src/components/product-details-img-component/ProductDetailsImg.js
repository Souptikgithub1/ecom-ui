import React from "react";
import ReactImageMagnify from "react-image-magnify";
import './ProductDetailsImg.css';

const ProductDetailsImg = ({
                               selectedImg,
                               images,
                               setSelectedImg,
                               imgConfig=
                                   {
                                       smallImage: {width: 480, height: 480},
                                       largeImage: {width: 900, height: 900}
                                   }
}) => {
  return <React.Fragment>
      <ReactImageMagnify
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
      <div className="product-img-strip-container">
          {images.map((img, i) => <div key={i} className={'strip-img-container' + (img === selectedImg ? ' selected' : '')} onClick={() => setSelectedImg(img)}>
                  <img className='strip-img' src={img} alt="something"/>
              </div>)}
      </div>
  </React.Fragment>
}

export default ProductDetailsImg