import React, {Component} from 'react';
import Block from './Block'
import ReactDOM from 'react-dom';

class Draw1 extends Component {

    constructor(props) {
        super(props);
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
            ny: 0,
            blocksConf: []
        }
    }

    handleMouseDown(e) {
        let target = e.target;
        if (target.className === 'drawPanel') {
            this.state.x = e.clientX;
            this.state.y = e.clientY;
            //获取左部和顶部的偏移量
            this.state.l = this.state.dp.offsetLeft;
            this.state.t = this.state.dp.offsetTop;
            //开关打开
            this.state.isDown = true;
        }
    }

    handleMouseMove(e) {
        if (this.state.isDown) {
            this.state.nx = e.clientX;
            this.state.ny = e.clientY;
            let newLeft = this.state.nx - this.state.x + this.state.l;
            let newTop = this.state.ny - this.state.y + this.state.t;
            this.setState({left: newLeft, top: newTop});
        }
    }

    componentDidMount() {
        this.setState({dp: ReactDOM.findDOMNode(this.refs.drawPanel)});
        window.onmouseup=()=>{
            this.state.isDown = false;
        }
    }

    handleClick() {
        let len = this.state.blocksConf.length;
        this.state.blocksConf.push({key: len});
        this.setState({blocksConf: this.state.blocksConf});
    }

    // handleMouseup() {
    //     this.state.isDown = false;
    // }

    handleChange(myKey) {
        Array.prototype.remove = function (val) {
            let index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };
        //移除blocksConf中这个block
        let blocksConf = this.state.blocksConf;
        blocksConf.map((item, index) => {
            if (item.key === myKey) {
                blocksConf.remove(blocksConf[index])
            }
        });

        this.setState({blocksConf: blocksConf})
    }

    render() {

        return (
            <div ref='drawPanel' className='drawPanel' onMouseDown={(e) => this.handleMouseDown(e)}
                 onMouseMove={(e) => {
                     this.handleMouseMove(e)
                 }} style={{left: this.state.left, top: this.state.top}}>
                {this.state.blocksConf.map((item) => {
                    return <Block key={item.key} myKey={item.key}
                                  onChange={(mykey) => this.handleChange(mykey)}/>
                })}
                <button onClick={() => {
                    this.handleClick()
                }}>生成block
                </button>
            </div>
        )
        //return(React.cloneElement('Block'))
    }
}

export default Draw1