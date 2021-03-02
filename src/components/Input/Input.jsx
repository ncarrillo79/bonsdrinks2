import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
        <>
        <label htmlFor={this.props.name}>{this.props.texto}</label>
        <input name={this.props.name} type={this.props.type} />
        </>
    );
  }
}

export default Input;