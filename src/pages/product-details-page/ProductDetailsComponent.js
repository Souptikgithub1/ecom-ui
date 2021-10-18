import React, {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import {useParams} from "react-router-dom";
import BreadcrumbsComponent from "../../components/breadcrumbs/BreadcrumbsComponent";
import './ProductDetailsComponent.css'
import ProductDetailsImg from "../../components/product-details-img-component/ProductDetailsImg";
import axios from "axios";
import {PRODUCTS_URL} from "../../utils/ApiConstants";
import {Rating, Skeleton} from "@mui/material";
import {toCurreny} from "../../utils/CommonUtils";
import ProductPageSellingPolicy from "../../components/product-page-selling-policy/ProductPageSellingPolicy";

const ProductDetailsComponent = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const {productId} = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState();

  useEffect(() => {
    const prodIdArr = productId.split('-');
    axios.get(`${PRODUCTS_URL}/${prodIdArr[prodIdArr.length-1]}`).then(res => {
      setProduct(res.data)
      setSelectedImg(res.data.images[0])
    })
  }, [])

  return <div style={{backgroundColor: '#fff'}}>
    <Toolbar />
    <Toolbar />
    <div className="breadcrumb-section">
      <BreadcrumbsComponent />
    </div>
    <div className='product-description-section'>
      <div className='product-details-section'>
        <div className='product-details-img-container'>
          <ProductDetailsImg
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
              images={product?.images}
              stripImgWidth='7rem'
              imgConfig={
                {
                  smallImage: {width: 650, height: 650},
                  largeImage: {width: 1000, height: 1000}
                }
              }
          />
        </div>
        <div className="product-details">
          <div className="product-details-name">
            {!!product ? product?.productName : <Skeleton variant="rectangular" width={300} height={15} />}
          </div>
          <div className="product-details-rating-container">
            {!!product ? <Rating
                    className='product-rating-qv product-details-rating'
                    size={"medium"}
                    name="read-only"
                    value={product?.rating} readOnly />
                : <Skeleton variant="rectangular" width={300} height={15} />}
          </div>
          <div className='product-price-section'>
            {!!product
                ? <React.Fragment>
                    <div className="product-actual-price">{toCurreny(product?.price)}</div>
                    <div className="product-selling-price">{toCurreny(product?.sellingPrice)}</div>
                  </React.Fragment>
                : <Skeleton variant="rectangular" width={300} height={15} />}
          </div>
        </div>
      </div>
      <div className='product-selling-policy'>
        <ProductPageSellingPolicy />
      </div>
    </div>
  </div>
}

export default ProductDetailsComponent