import React from 'react';

export default class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.post = props.data;
  }

  render() {
    return <div>{this.post.title}</div>;
  }
}
