//import { createBrowserHistory  } from 'history';

export function request(method, url, body) {
    method = method.toUpperCase();
    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Token': sessionStorage.getItem('access_token') || '' // 从sessionStorage中获取access token
        },
        body
    })

}

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);