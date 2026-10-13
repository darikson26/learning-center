export class CreateHistoricalObjectCommand {
  constructor({ name, coinId, collectionTypeId, yearProduction, coinCollectionId, summary, legends, price }) {
    this.name = name;
    this.CoinId = coinId;
    this.collectionTypeId = collectionTypeId;
    this.yearProduction = yearProduction;
    this.coinCollectionId = coinCollectionId;
    this.summary = summary;
    this.legends = legends;
    this.price = price;
    this.registeredAt = new Date().toISOString();
  }
}
