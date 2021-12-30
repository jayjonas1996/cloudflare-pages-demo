export default class Post {
  constructor(data) {
    if (data) {
      this.username = data.username;
      this.content = data.content;
      this.title = data.title;
      this.posted = new Date(data.posted);
      this.postType = data.postType ?? 'basic'; // fetch content
    }
  }
}
