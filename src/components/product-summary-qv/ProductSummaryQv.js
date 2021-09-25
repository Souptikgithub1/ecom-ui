import ReactImageMagnify from "react-image-magnify";
import {Rating} from "@mui/material";
import AddToCart from "../add-to-cart/addToCart";
import React from "react";

import './ProductSummaryQv.css'

const ProductSummaryQv = ({quickviewProduct}) => {
  return <div className="product-details-container-qv">
      <div className='product-details-img-container-qv'>
          <ReactImageMagnify {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  width: 400,
                  height: 400,
                  src: quickviewProduct
              },
              largeImage: {
                  src: quickviewProduct,
                  width: 500,
                  height: 500
              }
          }} />
          <div className="product-img-strip-container">
              <div className="strip-img-container">
                  <img className='strip-img' src={quickviewProduct} alt=""/>
              </div>
          </div>
      </div>
      <div className="product-details-qv">
          <div className="product-title-qv">Men Shoes</div>
          <Rating
              className='product-rating-qv'
              size={"medium"}
              name="read-only"
              value={3} readOnly />
          <div className="price-tag-qv">$299</div>
          <div className='product-desc-qv'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</div>
          <AddToCart />
      </div>
  </div>
}

export default ProductSummaryQv