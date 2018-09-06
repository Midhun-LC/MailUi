var initialState={
    authenticated:false,
    selection:"INBOX",
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
        return {
            ...state,
            selection: "SENT"
        }
    }
    if (action.type === "COMPOSE") {
        return {
            ...state,
            selection: "COMPOSE"
        }
    }
    if (action.type === "SENDEMAIL") {
        return {
            ...state,
            sentmail:action.data
        }
    }

    return state;
}

export default reducer;