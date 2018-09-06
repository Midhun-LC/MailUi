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

        var s=[...this.props.sent];
        s.unshift(email);
        this.props.sendEmail(s);
        this.props.goToSent();
    }

    viewMessage=(event,x)=>{

        if(event.target.textContent==="+"){
            event.target.textContent="-";
        }
        else{
            event.target.textContent = "+";
        }
        var c = event.target.parentElement.parentElement.parentElement;
        var m = c.getElementsByClassName("message");
        c.classList.toggle("enhance")
        m[0].classList.toggle("show");
    }

    render(){
        var data=null;
        if(this.props.selectedTab==="INBOX"){
            data=this.props.inbox.map(x=>{
                return <div className="mail" key={Math.random() + x.subject}>
                            <div className="item" ><div className="left"><button onClick={(e) => this.viewMessage(e, x)}>+</button><strong>FROM:</strong>{x.sender}</div><div className="right"><strong>SUBJECT:</strong>{x.subject}</div></div>
                            <div className="message">
                                {x.message}
                            </div>
                        </div>
            })

        }
        else if (this.props.selectedTab === "SENT"){
            data = this.props.sent.map(x => {
                return <div className="mail" key={Math.random() + x.subject}>
                    <div className="item" ><div className="left"><button onClick={(e) => this.viewMessage(e, x)}>+</button><strong>TO:</strong>{x.reciever}</div><div className="right"><strong>SUBJECT:</strong>{x.subject}</div></div>
                            <div className="message">
                                {x.message}
                            </div>
                        </div>
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
                {data.length!==0?data:<h3>No emails to display</h3>}
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