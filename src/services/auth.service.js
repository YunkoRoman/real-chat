import axios from 'axios'
import {backUrl} from '../constants/apiUrl'

class AuthService {
    authUser = (email, password) => axios.post(`${backUrl}/auth`, {email, password})
        .then(res => {
            console.log(res);
            return res.data;
        })
}

export default new AuthService()