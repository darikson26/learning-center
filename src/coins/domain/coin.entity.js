export class Coin {
  constructor({ id, title, collectionTypeId, yearProduction, price }) {
    this.id = id;
    this.title = title;
    this.collectionTypeId = collectionTypeId;
    this.yearProduction = yearProduction;
    this.price = price;
  }
}
