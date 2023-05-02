import React from "react";
import UserFetch from "./UserFetch";
// import { Input } from "./input";
// import LoginForm from "./loginForm";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "./notFound";
// import Counter from "./state";
// import UserForm from "./loginForm";

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleData = this.handleData.bind(this);
//   }

//   handleData(username, password, event) {
//     event.preventDefault();
//     console.log(username, password);
//   }

//   render() {
//     return <Input handleData={this.handleData} />;
//   }
// }

export function App() {
  return (
    <>
      <UserFetch />
    </>
  );
}
