export class CollectionResource {
  constructor({ id, title, country, state, collectionType, size }) {
    this.id = id;
    this.title = title;
    this.country = country;
    this.state = state;
    this.collectionType = collectionType;
    this.size = size;
  }
}
