import React, {Component} from 'react';
import Homepage from './pages/homepage/homepage.jsx';
import './App.css'
import {Switch,Route,Redirect} from 'react-router-dom';
import Shop from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignIn from './pages/Sign/Signin.jsx';
import {auth,createUser} from './firebase/firebase.jsx';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action.js';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.jsx';
class App extends Component 
{
  Out=null;
  componentDidMount()
  {
    const { setCurrentUser } = this.props;
   this.Out = auth.onAuthStateChanged( async userAuth => {
    if(userAuth)
    {
            const userRef =  await createUser(userAuth);
            userRef.onSnapshot(snapshot =>
              {

                setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
                });
              });
           
    }
    else{
      setCurrentUser(userAuth);
    }
    });
  }
          componentWillUnmount()
            {
                this.Out();
            }

  render()
    {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route
            exact
            path='/sign'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignIn />
              )
            }
          />
      </Switch>
     
  </div>
  );
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
