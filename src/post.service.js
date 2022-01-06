import APIHandler from './apiHandler.service';

export default class PostAPIService {

  static async getPosts() {
    return await APIHandler.fetchGet(`/posts`);
  }

  static async createPossts(data) {
      return await APIHandler.fetchPost(`/posts`, data);
  }

}