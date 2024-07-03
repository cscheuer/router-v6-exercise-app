import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHome from "./GoHome";
import RootRoutes from "./RootRoutes";

function App() {
  const userId = [1, 2, 3, 4, 5];
  
  return (
    <Router>
      <div className="App">
        <BackButton />
        <ForwardButton />
        <GoHome />
        <Link to="/about">About</Link>
        <br />
        <h1>Navbar</h1>
        {
          userId.map((id) => (
            <div key={id}>
              <Link to={`/users/${id}`}>User {id}</Link>
            </div>
          ))}

        <RootRoutes />
      </div>
    </Router>
  );
}
export default App;