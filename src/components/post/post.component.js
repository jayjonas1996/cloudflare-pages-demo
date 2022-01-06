import React from 'react';

export default class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.post = props.data;
  }

  render() {
    // if content type media show medias, or link or basic (w/ body)
    return (
      <div className="post-container">
        <div className="profile-bar">
          <div className="profile-picture-container">
            <img className="profile-picture" src={this.post.profilePicture} />
            <div>
              <h4>{this.post.title}</h4>
            </div>
            <div className='content-container'>

            </div>
            <div className='action-bar'>
      
            </div>
          </div>
        </div>
      </div>
    );
  }
}
