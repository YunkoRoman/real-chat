import axios from 'axios'
import {backUrl} from '../constants/apiUrl'

class UsersService {
    getUsersList = (_id, token) => axios.post(`${backUrl}/users/lists` ,{id: _id, token})

}

export default new UsersService()