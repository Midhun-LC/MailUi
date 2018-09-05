var initialState={
    authenticated:false
}

var reducer=(state=initialState,action)=>{
    if(action.type==="AUTHENTICATED"){
        return {
            authenticated:true
        }
    }
    if(action.type==="LOGOFF"){
        return {
            authenticated:false
        }
    }

    return state;
}

export default reducer;