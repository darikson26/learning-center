export class Collection {
  constructor({ id, title, country, state, collectionTypeId, size }) {
    this.id = id;
    this.title = title;
    this.country = country;
    this.state = state;
    this.collectionTypeId = collectionTypeId;
    this.size = size;
    this.historicalObjects = [];
  }

  getTotalPrice() {
    return this.historicalObjects.reduce((total, historicalObject) => total + historicalObject.price, 0);
  }

  getAvailableSize() {
    return this.size - this.historicalObjects.length;
  }

  canAddHistoricalObject() {
    return this.historicalObjects.length < this.size;
  }
}
