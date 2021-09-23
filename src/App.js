import React, {useEffect} from "react";
import './App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import BannerCarousel from "./components/banner-carousel/BannerCarousel";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppContext} from "./context/AppContext";
import Loader from "./util-components/loader/Loader";


const App = (props) => {

    const {getCategories, isLoading} = useAppContext();

    useEffect(() => {
        getCategories().then(res => {})
    }, [])

  return (
    <div className="App">
      <NavbarComponent {...props} />
        {/*<Toolbar />*/}
        {/*<img src={image1} alt="none" width='100%' />*/}
        <BannerCarousel />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(120)]
              .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
        </Box>
      </Container>
        {!!isLoading && <Loader />}
    </div>
  );
}

export default App;
