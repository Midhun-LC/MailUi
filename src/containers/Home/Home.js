import React,{Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';
import Content from './Content/Content';

class Home extends Component{

    componentDidMount=()=>{
        //console.log("authentication is set to " +this.props.auth);
        if(!this.props.auth){
            this.props.history.push("/login");
        }
    }

    logout=()=>{
        this.props.setAuthenticationFalse();
        this.props.history.push("/login");
    }

    render(){
        return (
        <div>
            <Content logout={this.logout}/>
        </div>);
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

export default connect(mapPropstoState, mapPropstoActions)(Home);