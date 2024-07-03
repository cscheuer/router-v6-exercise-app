import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NoMatch from "./NoMatch";

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:userId" element={<User />}>
        <Route
          path="posts"
          element={<p>Here is a list of the user's posts</p>}
        />
        <Route path="posts/:postId" element={<p>Here is a single post</p>} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default RootRoutes;