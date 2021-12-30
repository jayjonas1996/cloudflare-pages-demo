import React from 'react';
import './style.css';

export default class App extends React.Component {
  state = {
    posts: [],
  };

  constructor() {
    super();
  }

  render() {
    fetch('https://falling-frost-9a99.jaynaik.workers.dev/posts', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => console.log(res.json()));

    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
