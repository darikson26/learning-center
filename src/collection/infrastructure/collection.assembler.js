import { Collection } from '../domain/collection.entity.js';
import { CollectionResource } from './collection.resource.js';

export class CollectionAssembler {
  static toEntityFromResource(resource) {
    return new Collection({
      id: resource.id,
      title: resource.title,
      country: resource.country,
      state: resource.state,
      collectionTypeId: resource.collectionType,
      size: resource.size
    });
  }

  static toEntitiesFromResponse(response) {
    if (response.status !== 200) {
      return [];
    }

    return response.data.map((item) => this.toEntityFromResource(new CollectionResource(item)));
  }
}
