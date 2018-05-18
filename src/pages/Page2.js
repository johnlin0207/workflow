import React, {Component} from 'react'
import arrow from '../static/images/arrow.svg'
import Design from './Design'
import Debug from './Debug'

class Page2 extends Component {

    constructor(props) {
        super(props);
        this.state = {sel_l: true, sel_r: false, settings: false}
    }

    handleClick(e) {
        let target = e.target;
        let setClassName = target.className;
        if (setClassName === 'sel_l') {
            this.setState({sel_l: true, sel_r: false});
        } else {
            this.setState({sel_l: false, sel_r: true});
        }
    }

    handleSetClick() {
        this.setState({settings: !this.state.settings})
    }

    render() {
        let style1 = {'background': '#33adff'};
        let style2 = {'WebkitTransform': 'rotate(180deg)', 'WebkitTransition': 'all 0.2s ease-in'};
        let style3 = {'WebkitTransform': 'rotate(0deg)', 'WebkitTransition': 'all 0.2s ease-in'};
        return (
            <div className='container'>
                <div className='page2_top'>
                    <div className='block'/>
                    <div className='page2_selector'>
                        <div style={this.state.sel_l ? style1 : {}} className='sel_l'
                             onClick={(e) => this.handleClick(e)}>设计模式
                        </div>
                        <div style={this.state.sel_r ? style1 : {}} className='sel_r'
                             onClick={(e) => this.handleClick(e)}>调试模式
                        </div>
                    </div>
                    <div className='block'>
                        <div className='sets as' onClick={(e) => {
                            this.handleSetClick(e)
                        }} style={{
                            'border': this.state.settings ? '1px solid #33adff' : '1px solid #485872',
                            display: this.state.sel_l ? 'block' : 'none'
                        }}>
                            <div style={{float: 'left'}}>参数设置</div>
                            <div style={{float: 'left'}}><img src={arrow} alt="" className='icon'
                                                              style={this.state.settings ? style2 : style3}/></div>
                        </div>
                        <div className='sets' style={{display: this.state.sel_l ? 'block' : 'none'}}>保存</div>
                        <div className='sets debug' style={{display: this.state.sel_l ? 'none' : 'block'}}>开始调试</div>
                    </div>
                    <div className='settings' style={{display: this.state.settings && this.state.sel_l ? 'block' : 'none'}}>
                        <div className='set_header'>参数设置</div>
                        <div className='set_body'>
                            <div className='tui-form-item'>
                                <label>名称</label>
                                <input type="text"/>
                            </div>
                            <div className='tui-form-item'>
                                <label>描述</label>
                                <input type="text"/>
                            </div>
                            <div className='tui-form-item'>
                                <label>值</label>
                                <input type="text"/>
                            </div>
                            <div className='tui-form-item'>
                                <label>&nbsp;</label>
                                <input type="button" className='sub' value='添加'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    {this.state.sel_l ? <Design/> : <Debug/>}
                </div>
            </div>
        )
    }
}

export default Page2
