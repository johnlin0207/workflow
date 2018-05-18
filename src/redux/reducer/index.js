import {combineReducers} from 'redux';
import {ADD_TODO, Login} from '../action';

const userInfo = (state = 0, action) => {
    //status=0登出,status=1登入,status=2用户名密码错误,status=3网络错误,status=4填写字段,
    //status=5密码不一致,status=6注册成功,status=7注册失败

    switch (action.type) {

        case Login:
            return {
                loginname: action.loginname,
                status: action.status
            };
        case 'LOGOUT':
            return {
                status: 0
            };
        case 'LOGIN_STATUS':
            return {
                status: action.status
            };
        default:
            return state
    }
};

const Reducer = combineReducers({userInfo});
export default Reducer;