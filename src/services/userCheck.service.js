import axios from 'axios'
import {backUrl} from '../constants/apiUrl'


class UserCheck {
    checkUser = () => axios.get(`${backUrl}/auth/check`)
        .then(res => {

            return res.data;
        })

}

export default new UserCheck()