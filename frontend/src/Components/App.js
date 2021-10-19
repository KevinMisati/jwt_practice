import React, { Component} from "react";
import Articles from "./Articles"
import Login from './Login'
import SignUp  from "./SignUp";
import {Switch,Route,Link} from 'react-router-dom'
import axiosInstance from "./axiosApi";


class App extends Component{

  handleLogout = () => {
    axiosInstance.post('/blacklist/',{
      'refresh_token':localStorage.getItem('refresh_token')
    })
    .then(resp => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      axiosInstance.defaults.headers['Authorization'] = null
    })
    .catch(e => {
      console.log(e)
    })
  }
  render(){
    return(
      <div className="site">
      <h1>App</h1>
      <header>
        <nav>
          
          <Link id="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/login'>login</Link>
          <Link className="nav-link" to='/signup'>signup</Link>
          <button onClick={this.handleLogout}>Logout</button>
        </nav>
      </header>
      
        <Switch>
          <Route  path="/login" component={Login}  />
            
          <Route  path="/signup" component={SignUp} />
      
          <Route exact path="" component={Articles} />
            
        </Switch>
      <h5>Footer</h5>
      </div>
    );
  }
}

export default App;