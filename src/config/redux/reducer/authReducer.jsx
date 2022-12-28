const initialState = {
    user: {},
    isLoading: false
}

const authReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "SET_LOGIN_PENDING" :
            return{
                ...state,
                isLoading: true
            }
        case "SET_LOGIN_SUCCESS" :
            return{
                ...state,
                user: action.payload,
                isLoading: false
            }
        case "SET_LOGIN_FAILED" :
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
 
        default:
            return state
    }
}

export default authReducer