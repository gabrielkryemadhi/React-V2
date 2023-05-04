import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import { ShowGithubUSer } from "./ShowGithubUser";
import { GithubUser } from "./GithubUser";
// import { NotFound } from "./notFound";
import GithubUserList from "./GithubUserList";

export function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Welcome name={`Gabriel`} />} />
        <Route path="/counter" element={<Counter />}></Route> */}
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<GithubUser />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <br />
      <Link to={"/"}>Home </Link>
      <br />
      <Link to={"/counter"}>Counter </Link>
      <br />
      <Link to={"/users"}>My Github</Link>
    </div>
  );
}
