import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Fernando Cendretti",
        avatar:
          "https://avatars3.githubusercontent.com/u/51862504?s=400&u=edd35f3f0741b1806558068b8917d0bc70672a58&v=4",
        time: "3 min",
        body:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam accusantium quia veritatis quisquam placeat inventore dignissimos id, unde aliquam amet consequatur exercitationem vero, excepturi, rem nesciunt totam eveniet vitae maxime."
      },
      {
        id: 2,
        name: "Fernando Objective",
        avatar:
          "https://avatars3.githubusercontent.com/u/51862504?s=400&u=edd35f3f0741b1806558068b8917d0bc70672a58&v=4",
        time: "30 min",
        body:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam accusantium quia veritatis quisquam placeat inventore dignissimos id, unde aliquam amet consequatur exercitationem vero, excepturi, rem nesciunt totam eveniet vitae maxime."
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
