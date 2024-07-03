import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import UserProfile from "./UserProfile";

function User() {
  const { userId } = useParams();

  return (
    <>
      <UserProfile />
      <hr />
      <Link to={`/users/${userId}/posts`}>View All Posts</Link>
      ||
      <Link to={`/users/${userId}/posts/1`}>View post with ID 1</Link>
      <hr />
      <Outlet />
    </>
  );
}

export default User;
