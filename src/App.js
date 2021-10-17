import React, {useEffect} from "react";
import './App.css';

import NavbarComponent from "./components/navbar-component/NavbarComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppContext} from "./context/AppContext";
import Loader from "./util-components/loader/Loader";

import $ from 'jquery';
import FooterComponent from "./components/footer-component/FooterComponent";
import {Drawer} from "@mui/material";
import {Route, Switch} from "react-router-dom";
import HomePageComponent from "./pages/home-page/HomePageComponent";
import ProductDetailsComponent from "./pages/product-details-page/ProductDetailsComponent";


const App = (props) => {

    const {getCategories, isLoading, setDrawerOpen, isDrawerOpen} = useAppContext();


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
        <Switch>
            <Route exact path='/' component={HomePageComponent} />
            <Route exact path='/product-details/:id' component={ProductDetailsComponent} />
        </Switch>
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
