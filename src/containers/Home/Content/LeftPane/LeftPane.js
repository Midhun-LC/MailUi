import React,{Component} from 'react';
import "./LeftPane.css"
import {connect} from 'react-redux';

class LeftPane extends Component{

    onButtonClick=(event,func)=>{

        func();
        var buttons = document.getElementsByClassName("LeftPane")[0].getElementsByTagName("button");
        for(var i=0;i<buttons.length;i++){
            buttons[i].classList.remove('active');
           if(buttons[i].textContent.toLowerCase().indexOf(event.target.textContent.toLowerCase())===0){
               buttons[i].classList.add('active');
           }
        }
    }

    componentDidMount=()=>{
        var buttons = document.getElementsByClassName("LeftPane")[0].getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
            if (buttons[i].textContent.toLocaleLowerCase().indexOf(this.props.selectedTab.toLocaleLowerCase()) === 0) {
                buttons[i].classList.add('active');
            }
        }
    }

    render(){

        return(
            <div className="LeftPane">
                <p><button onClick={(e)=>this.onButtonClick(e,this.props.inbox)}>Inbox</button></p>
                <p><button onClick={(e) => this.onButtonClick(e,this.props.sent)}>Sent</button></p>
                <p><button onClick={(e) => this.onButtonClick(e,this.props.compose)}>Compose Email</button></p>
                <p><button onClick={(e) => this.onButtonClick(e,this.props.logout)}>Logout</button></p>
            </div>
        )
    }
}

const mapPropstoState = state => {
    return {
        selectedTab: state.selection,
    }
}

export default connect(mapPropstoState ,null)(LeftPane);