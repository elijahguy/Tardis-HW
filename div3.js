import React, { Component } from 'react';


export class Div3 extends Component {
  state = {
    caps: false,
  };
  changeIt = () => {
    console.log('Reached Here');
    if (this.state.caps) {
      this.setState({
        caps: false,
      });
    } else {
      this.setState({
        caps: true,
      });
    }
  };
  render() {
    return (
      <div>
        <h3 onClick={() => this.changeIt()}>
          {this.state.caps
            ? this.props.sibling2.name.toUpperCase()
            : this.props.sibling2.name.toLowerCase()}
        </h3>
      </div>
    );
  }
}

export default Div3;