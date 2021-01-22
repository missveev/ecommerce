import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Navigation from "./Component/Navigation/Navigation";
import ShopPage from "./Pages/Shop/shop";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Component/Footer/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route  path='/shop' component={ShopPage} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
