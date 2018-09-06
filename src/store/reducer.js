var initialState={
    authenticated:false,
    selection:"SENT",
    inbox:[
        {
            sender:"midhun@reactmail.com",
            subject:"sample",
            message:"this is a sample email"
        },
        {
            sender: "midhun@hotmail.com",
            subject: "React mail client",
            message: "this is a sample email client built using react and redux."
        },
        {
            sender: "midhun@hotmail.com",
            subject: "React mail client",
            message: "the code is available in the git hub repository.Follow the link https://github.com/Midhun-LC/MailUi/tree/master/src"
        },

    ],
    sentmail:[
        {
            reciever: "midhun@reactmail.com",
            subject: "sample email",
            message: "this is a sample email"
        },
        {
            reciever: "midhun@hotmail.com",
            subject: "sample email",
            message: "this is a sample email"
        }
    ]
}

var reducer=(state=initialState,action)=>{
    if(action.type==="AUTHENTICATED"){
        return {
            ...state,
            authenticated:true
        }
    }
    if(action.type==="LOGOFF"){
        return {
            ...state,
            authenticated:false
        }
    }
    if (action.type === "INBOX") {
        return {
            ...state,
            selection: "INBOX"
        }
    }
    if (action.type === "SENT") {
        //console.log("sent emails selected")
        return {
            ...state,
            selection: "SENT"
        }
    }
    if (action.type === "COMPOSE") {
        //console.log("sent emails selected")
        return {
            ...state,
            selection: "COMPOSE"
        }
    }
    if (action.type === "SENDEMAIL") {
        //console.log("sent emails selected")
        return {
            ...state,
            sentmail:action.data
        }
    }

    return state;
}

export default reducer;