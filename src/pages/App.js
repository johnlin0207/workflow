import React, {Component} from 'react';
import Page2 from './Page2';
import {connect} from 'react-redux';
import {handleLogout} from '../redux/action';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {index: 1, thisBody: 1}
    }

    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({index: Number(e.target.id)});
    }

    clickLogo(){
        this.setState({index: 1});
    }

    loginOut() {

        this.props.onHandleLogout()

    }

    componentDidMount(){
        //console.log(this.props.username)
    }

    render() {
        let style = {'backgroundColor': '#1f3e65'};

        return (
            <div className="app">
                <div className="header">
                    <div className="log" onClick={()=>{this.clickLogo()}}>WORKFLOW</div>
                    <div className="option f1" id='1' onClick={(e) => {
                        this.handleClick(e)
                    }} style={this.state.index === 1 ? style : {}}>仪表盘
                    </div>
                    <div className="option f2" id='2' onClick={(e) => {
                        this.handleClick(e)
                    }} style={this.state.index === 2 ? style : {}}>数据流
                    </div>
                    <div className="option f3" id='3' onClick={(e) => {
                        this.handleClick(e)
                    }} style={this.state.index === 3 ? style : {}}>参数
                    </div>
                    <div className="set">
                        <div className="user">{this.props.loginname}</div>
                        <div className="logout">
                            <div className="button" onClick={() => {
                                this.loginOut()
                            }}>注销
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app_body">
                    {this.state.index === 2 ? <Page2/> : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    const {status, loginname} = state.userInfo;

    return {
        status, loginname
    }
};

const mapDispatchProps = dispatch => {
    return {
        onHandleLogout: () => dispatch(handleLogout())
    }
};


export default connect(mapStateToProps,mapDispatchProps)(App);
