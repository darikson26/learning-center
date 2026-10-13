import { BaseApi } from '../../shared/infrastructure/base-api.js';
import { BaseEndpoint } from '../../shared/infrastructure/base-endpoint.js';

export class CoinsApi extends BaseApi {
  #coinsEndpoint;

  constructor() {
    super();
    this.#coinsEndpoint = new BaseEndpoint(this, import.meta.env.VITE_COINS_API_URL);
  }

  getCoins() {
    return this.#coinsEndpoint.getAll();
  }
}
