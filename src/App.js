import React from 'react';
import './style.css';

import Post from './models/post.model';
import PostComponent from './components/post/post.component';
import PostAPIService from './services/post.service';

export default class App extends React.Component {
  state = {
    posts: [],
  };

  constructor() {
    super();
    this.getData();
  }

  getData() {
    PostAPIService.getPosts().then((result) => {
      let posts = [];
      for (const data of result) {
        posts.push(new Post(data));
      }
      this.setState({
        posts: posts,
      });
    });
  }

  getPostComponents() {
    let postElements = [];
    for (const e of this.state.posts) {
      postElements.push(<PostComponent data={e}></PostComponent>);
    }
    return postElements;
  }

  render() {
    let postElements = this.getPostComponents();

    return <div>{postElements}</div>;
  }
}
