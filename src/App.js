import React from "react";
import './App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import Toolbar from "@mui/material/Toolbar";
import image1 from './assets/imgs/slide1.jpg'







const App = (props) => {

  return (
    <div className="App">
      <NavbarComponent {...props} />
        {/*<Toolbar />*/}
        <img src={image1} alt="none" width='100%' />
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
    </div>
  );
}

export default App;
