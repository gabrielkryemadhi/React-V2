import React from "react";
import { Input } from "./input";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
  }

  handleData(username, password, event) {
    event.preventDefault();
    console.log(username, password);
  }

  render() {
    return <Input handleData={this.handleData} />;
  }
}