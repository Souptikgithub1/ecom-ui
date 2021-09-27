import ReactImageMagnify from "react-image-magnify";
import {Rating} from "@mui/material";
import AddToCart from "../add-to-cart/addToCart";
import React, {useState} from "react";

import './ProductSummaryQv.css'
import {toCurreny} from "../../utils/CommonUtils";

const ProductSummaryQv = ({quickviewProduct}) => {
    const [selectedImg, setSelectedImg] = useState(quickviewProduct.images[0]);

  return <div className="product-details-container-qv">
      <div className='product-details-img-container-qv'>
          <ReactImageMagnify
              hoverDelayInMs={0}
              hoverOffDelayInMs={0}
              enlargedImagePosition='over'
              fadeDurationInMs={400}
              {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  width: 480,
                  height: 480,
                  src: selectedImg
              },
              largeImage: {
                  src: selectedImg,
                  width: 900,
                  height: 900
              }
          }} />
          <div className="product-img-strip-container">
              {quickviewProduct.images.map((img, i) => <div key={i} className={'strip-img-container' + (img === selectedImg ? ' selected' : '')} onClick={() => setSelectedImg(img)}>
                  <img className='strip-img' src={img} alt="something"/>
              </div>)}
          </div>
      </div>
      <div className="product-details-qv">
          <div className="product-title-qv">{quickviewProduct.productName}</div>
          <Rating
              className='product-rating-qv'
              size={"small"}
              name="read-only"
              value={quickviewProduct.rating} readOnly />
          <div className="price-tag-qv">{toCurreny(quickviewProduct.sellingPrice)}</div>
          <div className='product-desc-qv'>{quickviewProduct.productDescription}</div>
          <AddToCart />
      </div>
  </div>
}

export default ProductSummaryQv