import React, {Component} from 'react'
import Counter from '../components/Counter'
import Draw1 from '../components/Draw1'

class Debug extends Component {
    render() {
        return (
            <div className='debug'>
                <Counter/>
                {/*<Draw1/>*/}
            </div>
        )
    }
}

export default Debug;