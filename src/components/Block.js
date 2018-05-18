import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import aaa from '../static/images/a.svg'
import '../static/css/block.css';


class Block extends Component {

    constructor(props) {
        super(props);
        //let myKey = this.props.myKey;
        //console.log(myKey)
        this.state = {
            x: 0,
            y: 0,
            l: 0,
            t: 0,
            left: 0,
            top: 0,
            isDown: false,
            isMove: false,
            nx: 0,
            ny: 0
        }
    }

    handleMouseDown(e) {
        //获取x坐标和y坐标
        this.state.x = e.clientX;
        this.state.y = e.clientY;
        //获取左部和顶部的偏移量
        this.state.l = this.state.dv.offsetLeft;
        this.state.t = this.state.dv.offsetTop;
        //开关打开
        this.state.isDown = true;
        window.onmousemove = (e) => {
            this.state.nx = e.clientX;
            this.state.ny = e.clientY;
            this.handleMouseMove()
        };
    }

    handleMouseMove() {
        if (this.state.isDown) {
            this.state.isMove = true;
            let newLeft = this.state.nx - this.state.x + this.state.l;
            let newTop = this.state.ny - this.state.y + this.state.t;
            this.setState({left: newLeft, top: newTop});
        }
    }

    handleMouseUp() {
        this.state.isDown = false;
    }

    componentDidMount() {
        this.setState({dv: ReactDOM.findDOMNode(this.refs.bk)});

    }

    handleClick() {
        //console.log(this.props.myKey);
        this.props.onChange(this.props.myKey)
    }

    render() {
        return (
            <div ref='bk' className='bk' style={{top: this.state.top, left: this.state.left}}
                 onMouseDown={(e) => this.handleMouseDown(e)} onMouseUp={() => {
                this.handleMouseUp()
            }}>
                <div className='icon-container'>
                    <span className='item-close' onClick={() => {
                        this.handleClick()
                    }}>X</span>
                    {/*<svg className='item-icon'>*/}
                      {/**/}
                    {/*</svg>*/}
                    {/*<img src={aaa} className="item-icon" alt="icon"/>*/}
                </div>
                <div className='item-name'><span>NAME</span></div>
                <hr/>
                <div className='item-bottom'>
                    <div className='item-div'><a href='javascript:;'>edit</a></div>
                    <div className='item-div'><a href='javascript:;'>copy</a></div>
                </div>

            </div>
        )
    }
}

export default Block;