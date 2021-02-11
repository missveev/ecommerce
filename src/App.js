import React from 'react';
import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Navigation from "./Component/Navigation/Navigation";
import ShopPage from "./Pages/Shop/shop";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Component/Footer/Footer";
import SignIn from "./Pages/Form/Form";
import {auth, createUserProfileDocument} from "./Firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navigation />
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route exact path='/checkout' component={CheckoutPage}/>
                        <Route exact path='/signIn' render={() =>
                            this.props.currentUser ? (
                                    <Redirect to='/'/>) :
                                (<SignIn/>)
                        }/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps) (App);
