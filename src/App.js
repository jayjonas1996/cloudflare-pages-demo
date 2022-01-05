import React from 'react';
import './style.css';
import PostAPIService from './services/post.service';

export default class App extends React.Component {
  state = {
    posts: [],
  };

  constructor() {
    super();
  }

  async getData() {
    PostAPIService.getPosts().then((result) => console.log(result));
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
