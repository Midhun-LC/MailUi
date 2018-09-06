import React,{Component} from 'react';
import {connect} from 'react-redux';
import './RightPane.css';

class RightPane extends Component{

    render(){
        var data=null;
        if(this.props.selectedTab==="INBOX"){
            data=this.props.inbox.map(x=>{
                return <div key={Math.random() + x.subject} className="item"><div className="email"><strong>FROM:</strong>{x.sender}</div><div className="subject"><strong>SUBJECT:</strong>{x.subject}</div></div>
            })

            console.log(this.props.inbox)
        }
        else{
            //console.log(this.props.selectedTab);
            data = this.props.sent.map(x => {
                return <div key={Math.random() + x.subject}className="item"><div className="email"><strong>TO:</strong>{x.reciever}</div><div className="subject"><strong>SUBJECT:</strong>{x.subject}</div></div>
            })

            console.log(this.props.sent)
        }


        return (
            <div className="Rightpane">
                {data!=null?data:<h3>No emails to display</h3>}
            </div>
        )
    }
}

const mapPropstoState = state => {
    return {
        selectedTab: state.selection,
        inbox:state.inbox,
        sent:state.sentmail
    }
}

export default connect(mapPropstoState, null)(RightPane);