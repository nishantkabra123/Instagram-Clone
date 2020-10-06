import React,{useEffect,createContext,useReducer} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Login'
import Signup from './components/screens/Signup'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'
import {reducer} from './reducers/userReducer'

const UserContext =createContext()

const Routing=()=>{
  const history=useHistory()
  return (
    
  <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/signin">
    <Signin/>
    </Route>
    <Route path="/profile">
    <Profile/>
    </Route>
    <Route path="/signup">
    <Signup/>
    </Route>
    <Route path="/create">
    <CreatePost/>
    </Route>
  </Switch>
  )
}


function App() {
  
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routing/>
    </BrowserRouter>      
  );
}

export default App;
