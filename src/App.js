import React, {Component} from 'react';
import Homepage from './pages/homepage/homepage.jsx';
import './App.css'
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignIn from './pages/Sign/Signin.jsx';
import {auth,createUser} from './firebase/firebase.jsx';
class App extends Component 
{
  constructor()
  {
    super();
    this.state = {

      currentUser:null

                };
  }

  Out=null;
  componentDidMount()
  {
   this.Out = auth.onAuthStateChanged( async userAuth => {
    if(userAuth)
    {
            const userRef =  await createUser(userAuth);
            userRef.onSnapshot(snapshot =>{this.setState
              ({

              currentUser:
              {
                id:snapshot.id,
                ...snapshot.data()
              }

            })});
    }
    else{
      this.setState({currentUser:userAuth});
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
      <Header  currentUser= {this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      <Route path='/sign' component={SignIn} />
      </Switch>
     
  </div>
  );
    }
}

export default App;
