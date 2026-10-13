import axios from 'axios';

export class BaseApi {
  #http;

  constructor() {
    this.#http = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL
    });
  }

  get http() {
    return this.#http;
  }
}
