import { defineStore } from 'pinia';
import { CollectionApi } from '../infrastructure/collection.api.js';
import { CollectionAssembler } from '../infrastructure/collection.assembler.js';
import { HistoricalObjectAssembler } from '../infrastructure/historical-object.assembler.js';

const useCollectionStore = defineStore('collection', {
  state: () => ({
    collections: [],
    loading: false,
    error: ''
  }),

  actions: {
    async loadCollections() {
      this.loading = true;
      this.error = '';

      try {
        const api = new CollectionApi();
        const collectionsResponse = await api.getCollections();
        const historicalObjectsResponse = await api.getHistoricalObjects();
        const collections = CollectionAssembler.toEntitiesFromResponse(collectionsResponse);
        const historicalObjects = HistoricalObjectAssembler.toEntitiesFromResponse(historicalObjectsResponse);

        collections.forEach((collection) => {
          collection.historicalObjects = historicalObjects.filter((item) => item.coinCollectionId === collection.id);
        });

        this.collections = collections;
      } catch (error) {
        this.error = 'messages.load-error';
      } finally {
        this.loading = false;
      }
    },

    async createHistoricalObject(command) {
      const api = new CollectionApi();
      const response = await api.createHistoricalObject(command);
      const historicalObject = HistoricalObjectAssembler.toEntityFromResponse(response);
      const collection = this.collections.find((item) => item.id === historicalObject.coinCollectionId);

      if (collection) {
        collection.historicalObjects.push(historicalObject);
      }

      return historicalObject;
    }
  }
});

export default useCollectionStore;
