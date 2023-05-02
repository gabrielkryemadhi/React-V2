import React from "react";
// import { Input } from "./input";
import LoginForm from "./loginForm";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NotFound from "./notFound";
import Counter from "./state";
import GithubUserList from "./GithubUserList";
import GithubUser from "./GithubUser";

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
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<GithubUser />} />
        </Route>
      </Routes>
      <br />
      <Link to={"/"}>Home </Link>
      <br />
      <Link to={"/users"}>My Github</Link>
    </BrowserRouter>
  );
}
