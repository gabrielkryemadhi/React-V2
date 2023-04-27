import React from "react";
// import { Input } from "./input";
import LoginForm from "./loginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./notFound";
import Counter from "./state";

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
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<LoginForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
