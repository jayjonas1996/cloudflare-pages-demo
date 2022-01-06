
export default class Comment {
  constructor(data) {
    this.comment = data.comment;
    this.timestamp = new Date(data.timestamp);
    this.username = data.username;
  }
}
