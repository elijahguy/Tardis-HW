import React, {Component} from 'react'
import Div2 from './div2'




export class Div1 extends Component {
    render () {
        return (
            <div>
                <div2 sibling1={this.props.dataFromParent} />
            </div>
        )
    }
}export default Div1