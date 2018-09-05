import React,{Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Home extends Component{

    componentDidMount=()=>{
        console.log("authentication is set to " +this.props.auth);
    }

    render(){
        return <h1 className='Home'>You have reached homepage</h1>
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