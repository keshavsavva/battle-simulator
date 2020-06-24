import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Battle from './pages/Battle';
import Character from './pages/Character';
import Result from './pages/Result';

function App() {
    return (
        <HashRouter basename="/">
            <Header />
                <Route exact path={["/main", "/"]} component={Main} />
                <Route exact path="/battle" component={Battle} />
                <Route exact path="/character" component={Character} />
                <Route exact path="/result" component={Result} />
            <Footer />
        </HashRouter>
    );
  }
  
  export default App;
