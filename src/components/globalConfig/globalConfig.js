import { API_PATH } from './apiPath';

const APP_VERSION = 1.0;
const API_ENV = ( process.env.NODE_ENV && process.env.NODE_ENV === 'production' )  ? process.env.NODE_ENV : 'development';

const Settings = {
    API_VERSION,
    API_ROOT : API_PATH[API_ENV].API_ROOT,
    S3_API_ROOT : API_PATH[API_ENV].S3_API_ROOT,
    // PaymentTxnStatusCallBackTime : (process.env.NODE_ENV && process.env.NODE_ENV === 'production' ) ? 2000 : 3000,
    // PaymentTxnStatusCallBackIteration : (process.env.NODE_ENV && process.env.NODE_ENV === 'production' ) ? 10 : 36,
    API_ERROR : 0,
    API_SUCCESS : 1,
    MESSAGE_TYPES : {
        TRUE: true,
        FALSE : false,
        SUCCESS : 'SUCCESS',
        IN_PROGRESS : 'INPROGRESS',
        FAIL : 'FAIL'
    },
    serverError : 'Something Went Wrong',
    getHeaders(headers) {
        const HEADERS = {
            JSON : {
                'content-Type' : 'applicaiton/json'
            },
            URL_ENCODED : {
                'content-Type' : 'applicaiton/x-www-form-urlencoded'
            },
            TEXT_HTML : {
                'content-Type' : 'text/html'
            }
        };
        function getHeaders() {
            let headerObj = [];
            Object.keys(headers).forEach(key => {
                const header = HEADERS[headers[key]];
                headerObj = Object.assign(headerObj, header)
            });
            return headerObj;
        }
        return getHeaders();
    }

} ;