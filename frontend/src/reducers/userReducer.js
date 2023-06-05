export function userReducer(state = null,action){
    switch(action.type){
        case "LOGGED_IN_USER":
            return action.payload;
        case "LOGOUT":
            return action.payload;
        default:
            return state;        
    }
}
export function formReducer(state = null,action){
    switch(action.type){
        case "INSERT_FORM_DATA":
            return action.payload;
        case "UPDATE_FORM_DATA":
            return {
                ...state,
                [action.payload.key]: action.payload.value,
              };
        default:
            return state;        
    }
}