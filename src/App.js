import React, {useEffect, useState} from "react";
import './App.css';

import NavbarComponent from "./components/navbar-component/NavbarComponent";
import BannerCarousel from "./components/banner-carousel/BannerCarousel";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppContext} from "./context/AppContext";
import Loader from "./util-components/loader/Loader";

import $ from 'jquery';
import ProductCarousel from "./components/product-carousel/ProductCarousel";
import {CATEGORY_CARD, PRODUCT_CARD} from "./utils/StringConstants";
import FooterComponent from "./components/footer-component/FooterComponent";
import axios from "axios";
import {PRODUCTS_URL} from "./utils/ApiConstants";
import {Drawer} from "@mui/material";


const App = (props) => {

    const {getCategories, isLoading, setDrawerOpen, isDrawerOpen} = useAppContext();
    const [popularProducts, setPopularProducts] = useState();

    useEffect(() => {
        getCategories().then(res => {})
    }, [])

    useEffect(() => {
        if (!!isLoading) {
            $('body').addClass('loading-screen')
        } else {
            $('body').removeClass('loading-screen')
        }
    }, [isLoading])

    useEffect(() => {
        axios.get(PRODUCTS_URL)
            .then(res => setPopularProducts(res.data))
    }, [])

  return (
    <div className="App">
      <NavbarComponent {...props} />
        {/*<Toolbar />*/}
        {/*<img src={image1} alt="none" width='100%' />*/}
        <BannerCarousel />
        {/*<ProductCarousel
            headerName='Shop By Category'
            type={CATEGORY_CARD}/>*/}
        {!!popularProducts && popularProducts.length > 0 && <ProductCarousel
            dataArr={popularProducts}
            headerName='Popular Products'
            type={PRODUCT_CARD}
        />}
        <FooterComponent />
        <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
        >
            This section will be  showing for cart
        </Drawer>
        {!!isLoading && <Loader />}
    </div>
  );
}

export default App;
