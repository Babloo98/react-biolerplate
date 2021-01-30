import axios from 'axios';
import GlobalConfig from '../components/globalConfig/globalConfig';

class CommonService {
    test(param) {
        return axios({
            method : 'post',
            url : `${GlobalConfig.API_ROOT}/url`,
            data : param,
            headers : {
                'content-type' : 'application/json'
            }
        })
    }
    
}