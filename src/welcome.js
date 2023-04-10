import React from "react";
import { DisplayLanguage } from "./displayLanguege";

// export class Welcome extends React.Component{
//     render(){
//     return <h2>"Welcome{this.props.name}!"</h2>
//     }
// }

export function Welcome({ name = "World" }) {
  return (
    <>
      <h2>Hello, {name}!</h2>
      <DisplayLanguage />
    </>
  );
}
