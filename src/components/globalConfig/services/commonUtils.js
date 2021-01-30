import axios from 'axios';

export const serialize = (obj) => {
    const str = [];
    Object.keys(obj).forEach(p => {
        str.push(`${encodeURIComponent(p) } = ${encodeURIComponent(obj[p])}`);
    });
    return str.join('&');
};

export const replaceStringWithParam = (str, obj) =>{
    Object.keys(obj).forEach(j => {
        const regExp = new RegExp('[//[//]?*+|{}\\\\()@.\n\r]');
        str = str.replace(regExp, obj[j]);
    });
    return str;
};

export const isAPICANCELED = (e) =>{
    if(axios.isCancel(e)){
        return false;
    }
};