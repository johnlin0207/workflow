export const ADD_TODO = 'ADD_TODO';
export const Login = 'Login';
import {post} from '../../utils/request';

const userInfo = user => {
    return {
        type: Login,
        ...user
    }
};

export const handleLogin = user => dispatch => {
    let loginname = user.loginname;

    post('http://127.0.0.1:3000/login', user)
        .then((response) => {
            if (response.status === 200) {
                const token = response.headers.get('access-token');
                if (token) {
                    sessionStorage.setItem('access_token', token);
                }
                return response.json();
            } else {
                return Promise.reject('Unauthorized.');
            }
        })
        .then(json => {
            if (json.login === true) {
                //登录验证成功
                dispatch(userInfo({status: 1, loginname}))
            } else if (json.login === false) {
                dispatch(userInfo({status: 2}))
            }
        })
        .catch(() => {
            //连接失败
            dispatch(userInfo({status: 3}))
        })
};

export const loginStatus = status => {
    return {
        type: 'LOGIN_STATUS',
        status
    }
};

export const handleSignup = user => dispatch => {
    post('http://192.168.1.108:8888/RegisterServlet.do', user)
        .then(response => response.json())
        .then(json => {
            if (json.register === true) {
                dispatch(userInfo({status: 6}))
            } else {
                dispatch(userInfo({status: 7}))
            }
        })
};


export const handleLogout = () => {
    return {
        type: 'LOGOUT',
        status: 0
    }
};
