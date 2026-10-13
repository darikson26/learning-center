<script setup>
import { useI18n } from 'vue-i18n';

defineProps({
  collection: { type: Object, required: true }
});

const { t } = useI18n();
const priceFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function formatPrice(value) {
  return priceFormat.format(value);
}
</script>

<template>
  <pv-card :aria-label="collection.title">
    <template #title>{{ collection.title }}</template>
    <template #content>
      <div v-if="collection.historicalObjects.length === 0">{{ t('collection.no-items') }}</div>
      <div v-for="historicalObject in collection.historicalObjects" :key="historicalObject.id" class="flex justify-content-between gap-2">
        <span>{{ historicalObject.name }}</span>
        <span>{{ formatPrice(historicalObject.price) }}</span>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-column gap-1">
        <span>{{ t('collection.total-price') }}: {{ formatPrice(collection.getTotalPrice()) }}</span>
        <span>{{ t('collection.available-size') }}: {{ collection.getAvailableSize() }}</span>
      </div>
    </template>
  </pv-card>
</template>
