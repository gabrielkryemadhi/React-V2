import React from "react";

export class Display extends React.Component {
  render() {
    return <h1>Count: {this.props.state}</h1>;
  }
}