import { BaseApi } from '../../shared/infrastructure/base-api.js';
import { BaseEndpoint } from '../../shared/infrastructure/base-endpoint.js';

export class CollectionApi extends BaseApi {
  #collectionsEndpoint;
  #historicalObjectsEndpoint;

  constructor() {
    super();
    this.#collectionsEndpoint = new BaseEndpoint(this, import.meta.env.VITE_COLLECTIONS_ENDPOINT_PATH);
    this.#historicalObjectsEndpoint = new BaseEndpoint(this, import.meta.env.VITE_HISTORICAL_OBJECTS_ENDPOINT_PATH);
  }

  getCollections() {
    return this.#collectionsEndpoint.getAll();
  }

  getHistoricalObjects() {
    return this.#historicalObjectsEndpoint.getAll();
  }

  createHistoricalObject(command) {
    return this.#historicalObjectsEndpoint.create(command);
  }
}
