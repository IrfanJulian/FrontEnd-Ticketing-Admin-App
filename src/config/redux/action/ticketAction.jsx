import axios from "axios";

export const GET_DATA_TICKET = "GET_DATA_TICKET";
export const ADD_TICKET = "ADD_TICKET";
export const DELETE_DATA_TICKET = "DELETE_DATA_TICKET";
export const EDIT_DATA_TICKET = "EDIT_DATA_TICKET";
const token = localStorage.getItem('token')

export const getDataTicket = (page) => {

    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: GET_DATA_TICKET,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_GET_TICKET}${page}`,
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: GET_DATA_TICKET,
                payload: {
                    isLoading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3.')
            dispatch({
                type: GET_DATA_TICKET,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const addTicket = (data) => {
    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: ADD_TICKET,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_ADD_TICKET}`,
            data: data,
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: ADD_TICKET,
                payload: {
                    isLoading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3.')
            dispatch({
                type: ADD_TICKET,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}


export const deleteTicket = (id) => {
    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: DELETE_DATA_TICKET,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_URL_DELETE_TICKET}${id}`,
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: DELETE_DATA_TICKET,
                payload: {
                    isLoading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3.')
            dispatch({
                type: DELETE_DATA_TICKET,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

// export const editTicket = (id, data) => {
//     return(dispatch) => {

//         console.log('2.');
//         // isLoading 
//         dispatch({
//             type: EDIT_DATA_TICKET,
//             payload: {
//                 isLoading: true,
//                 data: false,
//                 errorMessage: false
//             }
//         })

//         // getData 
//         axios({
//             method: 'PUT',
//             url: `https://gentle-tights-jay.cyclic.app/stock-ticket/edit/${id}`,
//             data: data,
//             headers: {
//                 authorization: `Bearer ${token}`
//             }
//         })
//         .then((response) => {
//             console.log('3.')
//             dispatch({
//                 type: EDIT_DATA_TICKET,
//                 payload: {
//                     isLoading: false,
//                     data: response.data,
//                     errorMessage: false
//                 }
//             })
//         })
//         .catch((error) => {
//             console.log('3.')
//             dispatch({
//                 type: EDIT_DATA_TICKET,
//                 payload: {
//                     isLoading: false,
//                     data: false,
//                     errorMessage: error.message
//                 }
//             })
//         })
//     }
// }