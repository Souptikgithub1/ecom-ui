import {Rating} from "@mui/material";
import AddToCart from "../add-to-cart/addToCart";
import React, {useState} from "react";

import './ProductSummaryQv.css'
import {toCurreny} from "../../utils/CommonUtils";
import ProductDetailsImg from "../product-details-img-component/ProductDetailsImg";

const ProductSummaryQv = ({quickviewProduct}) => {
    const [selectedImg, setSelectedImg] = useState(quickviewProduct.images[0]);

  return <div className="product-details-container-qv">
      <div className='product-details-img-container-qv'>
            <ProductDetailsImg
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
                images={quickviewProduct.images} />
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