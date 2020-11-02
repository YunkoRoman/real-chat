import axios from 'axios'
import {backUrl} from '../constants/apiUrl'

class RegistrationService {
    sendRegisterDatas = (form) => axios.post(`${backUrl}/registration`, {form})
}

export default new RegistrationService()