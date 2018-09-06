import React,{Component} from 'react';
import "./LeftPane.css"
class LeftPane extends Component{

    render(){

        return(
            <div className="LeftPane">
                <p><button onClick={this.props.inbox}>Inbox</button></p>
                <p><button onClick={this.props.sent}>Sent</button></p>
                <p><button onClick={this.props.compose}>Compose Email</button></p>
                <p><button onClick={this.props.logout}>Logout</button></p>
            </div>
        )
    }
}

export default LeftPane;