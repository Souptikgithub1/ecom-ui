import React, {useEffect, useState} from 'react';
import BannerCarousel from "../../components/banner-carousel/BannerCarousel";
import ProductCarousel from "../../components/product-carousel/ProductCarousel";
import {PRODUCT_CARD} from "../../utils/StringConstants";
import axios from "axios";
import {FIRST_6_PRODUCTS_URL} from "../../utils/ApiConstants";

const HomePageComponent = () => {

    const [popularProducts, setPopularProducts] = useState();

    useEffect(() => {
        axios.get(FIRST_6_PRODUCTS_URL)
            .then(res => setPopularProducts(res.data))
    }, [])

  return <React.Fragment>
      <BannerCarousel />
      {/*<ProductCarousel
            headerName='Shop By Category'
            type={CATEGORY_CARD}/>*/}
      {!!popularProducts && popularProducts.length > 0 && <ProductCarousel
          dataArr={popularProducts}
          headerName='Popular Products'
          type={PRODUCT_CARD}
      />}
  </React.Fragment>
}

export default HomePageComponent