import React, {useEffect} from "react";
import './App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import BannerCarousel from "./components/banner-carousel/BannerCarousel";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppContext} from "./context/AppContext";
import Loader from "./util-components/loader/Loader";

import $ from 'jquery';
import ProductCarousel from "./components/product-carousel/ProductCarousel";
import {Divider} from "@mui/material";
import {CATEGORY_CARD, PRODUCT_CARD} from "./utils/StringConstants";


const App = (props) => {

    const {getCategories, isLoading} = useAppContext();

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

  return (
    <div className="App">
      <NavbarComponent {...props} />
        {/*<Toolbar />*/}
        {/*<img src={image1} alt="none" width='100%' />*/}
        <BannerCarousel />
        <ProductCarousel
            headerName='Shop By Category'
            type={CATEGORY_CARD}/>
        <ProductCarousel
            headerName='Popular Products'
            type={PRODUCT_CARD}
        />
        {!!isLoading && <Loader />}
    </div>
  );
}

export default App;
