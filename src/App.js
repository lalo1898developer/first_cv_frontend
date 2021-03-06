import React, { Fragment } from 'react';
import './index.css';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Contexts
import AuthContextProvider from './contexts/AuthContext';
import FormContextProvider from './contexts/FormContext';

// Misc
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import Routes from './Routes';

function App() {
  return (
    <Fragment>
      <Router>
        <AuthContextProvider>
            <Navigation />
              <Container className="mt-4">
                <FormContextProvider>
                  <Switch>
                    { Routes }
                  </Switch>
                </FormContextProvider>
              </Container>
            <Footer />
        </AuthContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
