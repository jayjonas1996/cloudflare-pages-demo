import Media from './media.model.js';

export default class Post {
  constructor(data) {
    if (data) {
      this.username = data.username;
      this.profilePicture =
        data.profile_picture |
        'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg';

      this.title = data.title;
      this.content = data.content;
      this.timestamp = new Date(data.timestamp); // 2022-05-22T05:00:00.000Z
      this.medias = [];

      data.medias.forEach((media) => {
        this.medias.push(new Media(media));
      });

      this.comments = [];
      data.comments.forEach((comment) => {
        this.comments.push();
      });
    }
  }
}
