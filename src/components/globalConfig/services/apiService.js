import axios from 'axios';
import { unstable_batchedUpdates } from 'react-dom';
import { renderIntoDocument } from 'react-dom/test-utils';
import { serialize, replaceStringWithParam } from './commonUtils';

(function AxiosService(obj) {
    _that.headers = obj.headers;
    _that.params = obj.params || {};
    _that.method = obj.method.toLowerCase();
    _that.url = obj.url;
    _that.url = obj.isSerialize || null;
}(obj));

this.setHeaders = setHeaders;
this.setParams = setParams;
this.get = handleGet;
this.post = handlePut;
this.put = handlePut;
this.all = handleAll;
this.doAjax = doAjax;

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
if(!window.axios_source){
    window.axios_source = [];
}
window.axios_source.push(source);

function doAjax() {
    try{
        delete _that.params.catalog_tag_filter;
    }
    catch(e){
        console.log('NETLY API SERVICE')
    }
    const data = _that.params;
    const convertParamsToUpdateUrl = {};
    Object.keys(data).forEach(i => {
        convertParamsToUpdateUrl[`{${i}}`] = data[i];
    })
    let url = replaceStringWithParam(_that.url, convertParamsToUpdateUrl);

    if(_that.method === 'get') {
        if(_that.params && Object.keys(_that.params).length > 0) {
            url += `?${serialize(_that.params)}`;
        }
    };

    return axios({
        method: _that.method,
        url,
        headers : Object.assign({}, _that.headers),
        data,
        cancelToken : source.token
    });
};

    function setParams(obj) {
        if(obj) {
            Object.keys(obj).forEach(i => {
                this.params[i] = obj[i];
            });
        }
    };

    function setHeaders(key, val) {
        this.headers[key] = val
    };

    function handleGet() {
        this.doAjax('get');
    };

    function handlePost() {
        this.doAjax('post');
    };

    function handlePut() {
        this.doAjax('put');
    };

    function handleAll(promise) {
        return axios.all(promise); //promise will be object of array e.g : [axios.get('/url'), axios.get('/url')]
    };