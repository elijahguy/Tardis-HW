import React, {Component} from 'react';
import Div3 from './div3'








export class Div2 extends Component {
    render(){
        return (
            <div>
            <div3 sibling2={this.props.sibling1} />

            <div3 sibling2={this.props.sibling1} />
            </div>
        )
    }
}