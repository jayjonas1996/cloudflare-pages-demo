import React from 'react';
import './style.css';
import PostAPIService from './services/post.service';
import Post from './models/post.model';

export default class App extends React.Component {
  state = {
    posts: [],
  };

  constructor() {
    super();
  }

  async getData() {
    posts = [];
    PostAPIService.getPosts().then((result) => {
      console.log(result);
      result.forEach((data) => posts.push(new Post(data)));
      console.log(posts);
    });
  }

  render() {
    this.getData();

    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
