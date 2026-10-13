import { Coin } from '../domain/coin.entity.js';
import { CoinResource } from './coin.resource.js';

export class CoinAssembler {
  static toEntityFromResource(resource) {
    return new Coin({
      id: resource.id,
      title: resource.title,
      collectionTypeId: resource.collectionTypeId,
      yearProduction: resource.yearProduction,
      price: resource.price
    });
  }

  static toEntitiesFromResponse(response) {
    if (response.status !== 200) {
      return [];
    }

    return response.data.coins.map((item) => this.toEntityFromResource(new CoinResource(item)));
  }
}
