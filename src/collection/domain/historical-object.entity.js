export class HistoricalObject {
  constructor({ id, name, coinId, collectionTypeId, yearProduction, coinCollectionId, summary, legends, price, registeredAt }) {
    this.id = id;
    this.name = name;
    this.coinId = coinId;
    this.collectionTypeId = collectionTypeId;
    this.yearProduction = yearProduction;
    this.coinCollectionId = coinCollectionId;
    this.summary = summary;
    this.legends = legends;
    this.price = price;
    this.registeredAt = registeredAt;
  }
}
