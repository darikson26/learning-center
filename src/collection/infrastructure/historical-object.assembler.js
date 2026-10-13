import { HistoricalObject } from '../domain/historical-object.entity.js';
import { HistoricalObjectResource } from './historical-object.resource.js';

export class HistoricalObjectAssembler {
  static toEntityFromResource(resource) {
    return new HistoricalObject({
      id: resource.id,
      name: resource.name,
      coinId: resource.CoinId,
      collectionTypeId: resource.collectionTypeId,
      yearProduction: resource.yearProduction,
      coinCollectionId: resource.coinCollectionId,
      summary: resource.summary,
      legends: resource.legends,
      price: resource.price,
      registeredAt: resource.registeredAt
    });
  }

  static toEntityFromResponse(response) {
    if (response.status !== 200 && response.status !== 201) {
      return null;
    }

    return this.toEntityFromResource(new HistoricalObjectResource(response.data));
  }

  static toEntitiesFromResponse(response) {
    if (response.status !== 200) {
      return [];
    }

    return response.data.map((item) => this.toEntityFromResource(new HistoricalObjectResource(item)));
  }
}
