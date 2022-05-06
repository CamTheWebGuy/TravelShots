import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Home from './components/Home';
import Register from './screens/Register';
import Signin from './screens/Signin';
import Dashboard from './screens/Dashboard';
import SearchResults from './screens/SearchResults';
import Profile from './screens/Profile';
import Upload from './screens/Upload';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Fragment>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route
                exact
                path="/search-results/:query"
                element={<SearchResults />}
              />
              <Route exact path="/profile/:id" element={<Profile />} />
              <Route exact path="/upload" element={<Upload />} />
            </Routes>
          </Fragment>
        </Router>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
