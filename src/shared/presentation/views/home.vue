<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import useCollectionStore from '../../../collection/application/collection.store.js';
import CollectionSummary from '../../../collection/presentation/components/collection-summary.vue';

const { t } = useI18n();
const collectionStore = useCollectionStore();

onMounted(() => {
  collectionStore.loadCollections();
});
</script>

<template>
  <div class="flex flex-column gap-2">
    <h1>{{ t('home.title') }}</h1>
    <p>{{ t('home.content') }}</p>
    <section aria-labelledby="collections-title">
      <h2 id="collections-title">{{ t('home.collections') }}</h2>
      <pv-message v-if="collectionStore.error" severity="secondary" aria-live="polite">{{ t(collectionStore.error) }}</pv-message>
      <div class="grid">
        <div v-for="collection in collectionStore.collections" :key="collection.id" class="col-12 md:col-6">
          <collection-summary :collection="collection" />
        </div>
      </div>
    </section>
  </div>
</template>
