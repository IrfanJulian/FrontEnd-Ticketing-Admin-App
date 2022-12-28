import { GET_DATA_AIRLINES, DELETE_DATA_AIRLINES, ADD_DATA_AIRLINES } from '../action/airlinesAction';

const initialState = {
    dataAirlinestResult: false,
    isLoading: false,
    error: false,

    deleteAirlinesResult: false 
}

const airlines = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_AIRLINES:
            return{
                ...state,
                dataAirlinesResult: action.payload.data,
                isLoading: action.payload.isLoading,
                error: action.payload.errorMessage
            }

        case ADD_DATA_AIRLINES:
            return{
                ...state,
                dataAirlinesResult: action.payload.data,
                isLoading: action.payload.isLoading,
                error: action.payload.errorMessage
            }

        case DELETE_DATA_AIRLINES:
            return{
                ...state,
                deleteAirlinesResult: action.payload.data,
                isLoading: action.payload.isLoading,
                error: action.payload.errorMessage
            }
        default:
            return state
    }
}



export default airlines