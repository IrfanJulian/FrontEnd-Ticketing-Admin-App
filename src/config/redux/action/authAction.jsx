import axios from 'axios'

export const Login = (data, navigate) => async(dispatch) => {
    try {
        dispatch ({type: 'SET_LOGIN_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_URL_LOGIN}`, data)
        const user = result.data.data
        dispatch ({type: 'SET_LOGIN_SUCCESS', payload: user })
        localStorage.setItem('token', user.token)
        navigate('/home')
    } catch (error) {
        console.log(error);
        dispatch ({type: 'SET_LOGIN_FAILED', payload: error.response}) 
    }
}