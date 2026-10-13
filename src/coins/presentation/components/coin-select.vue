<script setup>
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import useCoinsStore from '../../application/coins.store.js';

const model = defineModel();
const props = defineProps({
  collectionTypeId: { type: Number, default: null }
});

const { t } = useI18n();
const coinsStore = useCoinsStore();

const coins = computed(() => {
  return coinsStore.coins.filter((coin) => coin.collectionTypeId === props.collectionTypeId);
});

onMounted(() => {
  coinsStore.loadCoins();
});
</script>

<template>
  <div class="flex flex-column gap-2">
    <label for="coin">{{ t('historical-object-form.coin') }}</label>
    <pv-select
      v-model="model"
      input-id="coin"
      :options="coins"
      option-label="title"
      :disabled="!collectionTypeId"
      aria-label="Coin" />
    <pv-message v-if="coinsStore.error" severity="secondary" aria-live="polite">{{ t(coinsStore.error) }}</pv-message>
  </div>
</template>
