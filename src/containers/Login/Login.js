import React,{Component} from 'react';
import './Login.css'
import {connect} from 'react-redux';

class Login extends Component{

    state={
        login:{
            username:"midhun",
            password:"midhun"
        }
    }

    componentWillMount=()=>{
        if (this.props.auth) {
            this.props.history.push('/home');
        }

        console.log("authentication is set to "+ this.props.auth)
    }

    onLogin=(event)=>{

        event.preventDefault();
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;

        if(username===this.state.login.username && password===this.state.login.password){
            //set global authentication state to true
            this.props.setAuthenticationTrue();
            console.log(this.props.auth);
            this.props.history.push('/home');
        }

        else{
            alert("invalid credentials");
        }
    }

    render(){

        return(
            
            <div className="Login">
                <form>
                    <div className="row">
                        <div className="column">
                            <label>Enter UserName:</label>
                        </div>

                        <div className="column">
                        <input id="username" type="text" name="username" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label>Enter password:</label>
                        </div>
                        <div className="column">
                            <input id="password" type="password" name="username" required/>
                        </div>
                    </div>
                    <input type="submit" name="Submit" onClick={this.onLogin}/>
                </form>
            </div>
        )
    }
}

const mapPropstoState = state => {
    return {
        auth: state.authenticated
    }
}

const mapPropstoActions = dispatch => {
    return {

        setAuthenticationTrue: () => dispatch({ type: 'AUTHENTICATED' }),
        setAuthenticationFalse: () => dispatch({ type: 'LOGOFF' }),
    }
}

export default connect(mapPropstoState, mapPropstoActions)(Login);