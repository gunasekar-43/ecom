import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.components';

import SHOPPAGES  from './pages/shop/shop.component.js';
import  Sinin from './pages/sign-in-and-sing-out/sign-in-and-sign-out';
import HEADER from './components/headercomponent/header.component';
import {auth,createUserProfileDocument  } from './firebase/firebase.utils';

 
class App extends React.Component {
 
  constructor(){
    super();
    this.state={
      currentuser:null
    };
  }
  unsubscribeFromAuth = null;
 componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(
    async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentuser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({currentuser:userAuth});
  }
   )
 }

 componentWillUnmount(){
   this.unsubscribeFronAuth();
 }


  render(){

  
  return (
    <div>
    <HEADER/>
    <Switch>
      <Route exact path='/'component={HomePage}/>
       <Route  path='/shop'component={SHOPPAGES}/>
       <Route  path='/signin'component={Sinin}/> 
      </Switch>
    </div>
  )
}
}

export default App;