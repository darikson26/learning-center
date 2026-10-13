export class HistoricalObjectResource {
  constructor({ id, name, CoinId, collectionTypeId, yearProduction, coinCollectionId, summary, legends, price, registeredAt }) {
    this.id = id;
    this.name = name;
    this.CoinId = CoinId;
    this.collectionTypeId = collectionTypeId;
    this.yearProduction = yearProduction;
    this.coinCollectionId = coinCollectionId;
    this.summary = summary;
    this.legends = legends;
    this.price = price;
    this.registeredAt = registeredAt;
  }
}
