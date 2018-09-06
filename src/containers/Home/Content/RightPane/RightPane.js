import React,{Component} from 'react';
import {connect} from 'react-redux';
import './RightPane.css';

class RightPane extends Component{

    SendMessage=(event)=>{

        event.preventDefault();
        var email={
            reciever: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("content").value
        }

        var s=Object.assign(this.props.sent).concat([email]);
        this.props.sendEmail(s);
        this.props.goToSent();
    }

    render(){
        var data=null;
        if(this.props.selectedTab==="INBOX"){
            data=this.props.inbox.map(x=>{
                return <div key={Math.random() + x.subject} className="item"><div className="left"><strong>FROM:</strong>{x.sender}</div><div className="right"><strong>SUBJECT:</strong>{x.subject}</div></div>
            })

        }
        else if (this.props.selectedTab === "SENT"){
            data = this.props.sent.map(x => {
                return <div key={Math.random() + x.subject}className="item"><div className="left"><strong>TO:</strong>{x.reciever}</div><div className="right"><strong>SUBJECT:</strong>{x.subject}</div></div>
            })

        }

        else{
            data=(
                <form onSubmit={this.SendMessage}>
                    <div className="item">
                        <div className="left">
                            To:
                        </div>
                        <div className="right">
                            <input id="email" type="email" required/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            Subject
                        </div>
                        <div className="right">
                            <input  id="subject" type="text" required/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            body
                        </div>
                        <div className="right">
                            <textarea id="content" rows="3" cols="50"/>
                        </div>
                    </div>
                    <button >Send</button>
                </form>
            )
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

const mapPropstoActions = dispatch => {
    return {

        sendEmail: (email) => dispatch({ type: 'SENDEMAIL' ,data:email}),
        goToSent: () => dispatch({ type: 'SENT'})
    }
}

export default connect(mapPropstoState, mapPropstoActions)(RightPane);