import React,{Component} from 'react';
import LeftPane from './LeftPane/LeftPane';
import RightPane from './RightPane/RightPane';
import { connect } from 'react-redux';
import './Content.css'

class Content extends Component{

    onInBoxSelect=()=>{

        this.props.inboxSelected();
    }

    onSentSelect=()=>{
        this.props.sentSelected();
    }

    onComposeSelect = () => {
        this.props.composeSelected();
    }

    render(){

        return (
            <div className="Content">

                <LeftPane inbox={this.onInBoxSelect} sent={this.onSentSelect} logout={this.props.logout} compose={this.onComposeSelect}/>
                <RightPane/>
            </div>
        )
    }

}


const mapPropstoActions = dispatch => {
    return {

        inboxSelected: () => dispatch({ type: 'INBOX' }),
        sentSelected: () => dispatch({ type: 'SENT' }),
        composeSelected: () => dispatch({ type: 'COMPOSE' }),
    }
}


export default connect(null, mapPropstoActions)(Content);