const INITIAL_STATE = {
    users: [{
        name: "Hassan",
        email: "hassan@gmail.com"
    },
    {
        name: "Hannan",
        email: "hannan@gmail.com"
    }
]
}

export default (state = INITIAL_STATE, action) => {
    console.log("action==>", action);
    switch(action.type){
        case "SETDATA":
            console.log("state==>", state)
            return({
                ...state,
                users: [...state.users ,action.data]
            })
        default:
            return state;
    }
    
}