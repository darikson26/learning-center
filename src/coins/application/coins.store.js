import { defineStore } from 'pinia';
import { CoinsApi } from '../infrastructure/coins.api.js';
import { CoinAssembler } from '../infrastructure/coin.assembler.js';

const useCoinsStore = defineStore('coins', {
  state: () => ({
    coins: [],
    loading: false,
    error: ''
  }),

  actions: {
    async loadCoins() {
      this.loading = true;
      this.error = '';

      try {
        const api = new CoinsApi();
        const response = await api.getCoins();
        this.coins = CoinAssembler.toEntitiesFromResponse(response);
      } catch (error) {
        this.error = 'messages.load-error';
      } finally {
        this.loading = false;
      }
    }
  }
});

export default useCoinsStore;
