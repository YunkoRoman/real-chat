import axios from 'axios'
import {backUrl} from '../constants/apiUrl'


class messageSevice {

    getMessages = (userRecipientId, token) => axios.post(`${backUrl}/message/get`, {id: userRecipientId, token} )

}

export default new messageSevice()