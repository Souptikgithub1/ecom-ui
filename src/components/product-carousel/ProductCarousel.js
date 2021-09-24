import React from 'react'
import './ProductCarousel.css'
import ProductCard from "../product-card/ProductCard";
import Divider from "../divider-component/Divider";

const ProductCarousel = ({headerName, type}) => {
    return <div className='product-carousel-container'>
        <div className='divider-container'><Divider /></div>
        <div className='product-carousel-header'>{headerName}</div>
        <div className='carousel-product-list-container'>
            {[...new Array(6)].map((x, i) => <ProductCard id={i+1} key={i} type={type} />)}
        </div>
    </div>
}

export default ProductCarousel