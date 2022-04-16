
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Home from './components/Home'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Fragment>
      </Router>
    </ChakraProvider>
  );
};

export default App;
