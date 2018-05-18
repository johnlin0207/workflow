import React, {Component} from 'react'


class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {percent: 100}
    }

    handleZoomOut() {
        this.setState({percent: this.state.percent >= 10 ? this.state.percent - 10 : 0})
    }

    handleZoomIn() {
        this.setState({percent: this.state.percent <= 190 ? this.state.percent + 10 : 200})
    }

    render() {
        return (
            <div className='zoom'>
                <div className='zoom-out' onClick={() => {
                    this.handleZoomOut()
                }}>-
                </div>
                <div className='zoom-percent'>{this.state.percent}%</div>
                <div className='zoom-in' onClick={() => {
                    this.handleZoomIn()
                }}>+
                </div>
            </div>
        )
    }
}

export default Counter;