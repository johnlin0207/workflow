import React, {Component} from 'react';
import {handleLogin, handleSignup, loginStatus} from '../redux/action'
import {connect} from 'react-redux'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error_message: '',
            signup: false,
            warnItem: [],
            regmethod: ''
        };
        this.loginname = React.createRef();
        this.username = React.createRef();
        this.password = React.createRef();
        this.password2 = React.createRef();
        this.bossid = React.createRef();
        this.inputs = React.createRef()
    }

    //检查接收到的对象值是否为空，将空的对应的名字push进items
    checkInput(user) {
        //字段尚未完全填完
        if (!Login.checkEmpty(user)) {
            //提示请填写所有字段
            this.props.onHandleStatus(4);
            let items = [];
            for (let i in user) {
                if (user[i].trim() === '') {
                    items.push(i)
                }
            }
            this.setState({warnItem: [...items]})
        }
    }

    //没填完返回false,否则为true
    static checkEmpty(user) {
        let res = true;
        //判断字段是否全部填完
        for (let i in user) {
            res = res && user[i].trim()
        }
        return Boolean(res)
    }

    handleLogin() {
        //false为登录,true为注册
        if (!this.state.signup) {
            //当前是登录操作
            let user = {
                loginname: this.loginname.current.value,
                password: this.password.current.value
            };
            let {onHandleLogin} = this.props;
            this.checkInput(user);
            //fetch用户信息并发送至store
            user = {
                loginname: user.loginname,
                password: user.password
            };
            onHandleLogin(user);
        } else {
            //注册操作
            let user = {};
            //employee注册
            if (this.state.regmethod === 'employee') {
                user = {
                    loginname: this.loginname.current.value,
                    username: this.username.current.value,
                    password: this.password.current.value,
                    password2: this.password2.current.value,
                    bossid: this.bossid.current.value
                };
            } else if (this.state.regmethod === 'boss') {
                user = {
                    loginname: this.loginname.current.value,
                    username: this.username.current.value,
                    password: this.password.current.value,
                    password2: this.password2.current.value
                };
            }
            this.checkInput(user);
            //如果填完
            if (Login.checkEmpty(user)) {
                this.state.warnItem = [];
                if (user.password !== user.password2) {
                    //两次密码输入不一致
                    this.props.onHandleStatus(5)
                } else {
                    //错误信息变为空
                    this.props.onHandleStatus(0);
                    //所有字段符合规则,提交信息
                    this.props.onHandleSignup(user);
                }
            }
        }
    }

    handleSignup() {
        this.setState({
            signup: !this.state.signup,
            warnItem: [],
            regmethod: this.state.regmethod === '' ? 'employee' : this.state.regmethod ? this.state.regmethod : ''
        });
        this.props.onHandleStatus(0);
    }

    handleRadio(e) {
        this.setState({regmethod: e.target.value})
    }

    keyDown(e) {
        if (e.key === 'Enter') {
            this.handleLogin();
        }
    }

    componentWillReceiveProps(nextProps) {
        let {status, history} = nextProps;

        switch (status) {
            case 1:
                history.push('/app');
                break;
            case 2:
                this.setState({error_message: '未找到此用户或密码错误!'});
                break;
            case 3:
                this.setState({error_message: '网络连接失败!'});
                break;
            case 4:
                this.setState({error_message: '填写必要字段!'});
                break;
            case 5:
                this.setState({error_message: '输入的两次密码不一致!'});
                break;
            case 6:
                this.setState({error_message: '注册成功!'});
                break;
            case 7:
                this.setState({error_message: '该组用户名已存在，请更换用户名'});
                break;
            default:
                this.setState({error_message: ''});
                break;
        }
    }

    componentDidUpdate() {
        let inputItems = this.inputs.current.children;
        //还原所有input的border
        for (let i = 0; i < inputItems.length; i++) {
            inputItems[i].setAttribute('style', 'border:2px solid hsla(0, 0%, 100%, .5)')
        }

        let warnItem = this.state.warnItem;
        //设置未填的input的border
        warnItem.forEach((item) => {
            //处理未填的input
            this[item].current.parentNode.setAttribute('style', 'border:2px solid red')
        })
    }

    componentDidMount() {

        document.onkeydown = (e) => this.keyDown(e);
    }

    render() {
        return (
            <div className='login'>
                <div className={this.state.signup ? 'signup signupButon' : 'signup'} onClick={() => {
                    this.handleSignup()
                }}>注册
                </div>
                <div className={this.state.signup?'box signupBox':'box'} >
                    <div className="login_logo" style={this.state.signup ? logoHeight : {}}>WORKFLOW</div>
                    <div className="select" style={this.state.signup ? {'display': 'flex'} : {'display': 'none'}}>
                        <input type="radio" id='a' name='sele' value='employee' defaultChecked='checked'
                               onClick={(e) => this.handleRadio(e)}/>
                        <label htmlFor="a">employee</label>
                        <input type="radio" id='b' name='sele' value='boss' onClick={(e) => this.handleRadio(e)}/>
                        <label htmlFor="b">boss</label>
                    </div>
                    <div className="login-error-message">{this.state.error_message}</div>
                    <div className="login_input" ref={this.inputs}>
                        <div className='username'>
                            <div className='icon'></div>
                            <input type="text" placeholder='登录名' ref={this.loginname}/>
                        </div>
                        <div className={this.state.signup ? 'username' : 'username disnone'}>
                            <div className='icon'></div>
                            <input type="text" placeholder='用户名' ref={this.username}/>
                        </div>
                        <div className='username'>
                            <div className="icon icon_pw"></div>
                            <input type="password" placeholder='密码' ref={this.password}/>
                        </div>
                        <div className={this.state.signup ? 'username' : 'username disnone'}>
                            <div className='icon icon_pw'></div>
                            <input type="password" placeholder='再次输入密码' ref={this.password2}/>
                        </div>
                        <div
                            className={this.state.signup ? this.state.regmethod === 'employee' ? 'username' : 'username disnone' : 'username disnone'}
                            style={this.state.regmethod === 'employee' ? {} : {'display': 'none'}}>
                            <div className='icon'></div>
                            <input type="text" placeholder='bossid' ref={this.bossid}/>
                        </div>
                    </div>
                    <div className={this.state.signup ? 'login_button_box signup_button_box' : 'login_button_box'}>
                        <div className="login_button" onClick={(e) => {
                            this.handleLogin(e)
                        }}>
                            <div className="login_word">{this.state.signup ? '确定' : '登录'}</div>
                        </div>
                    </div>
                    <div className="login_footer"
                         style={this.state.signup ? {'display': 'none'} : {}}>{'©2018 Richfit. All Rights Reserved.'}</div>
                </div>
            </div>
        )
    }
}

//监听store
const mapStateToProps = state => {
    const {status} = state.userInfo;
    return {
        status
    }
};

const mapDispatchProps = dispatch => {
    return {
        onHandleLogin: (user) => dispatch(handleLogin(user)),
        onHandleStatus: (status) => dispatch(loginStatus(status)),
        onHandleSignup: (user) => dispatch(handleSignup(user))
    }
};

export default connect(mapStateToProps, mapDispatchProps)(Login);
