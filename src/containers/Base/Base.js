import React,{Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import "./Base.css";


class Base extends Component{

    render(){
        return(
         <div> 
            <header className="header">
                <p>Welcome to React mail client</p>
            </header>
            <Switch>  
                <Route path="/login" exact component={Login}/>
                <Route path="/home" exact component={Home}/>
                <Redirect from="/" to="/login"/>
            </Switch>
            <footer className="footer">
                <p>A project done by Midhun LC using React</p>
            </footer>
        </div>
        );
    }
}

export default Base;