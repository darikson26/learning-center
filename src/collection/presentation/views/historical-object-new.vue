<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import useCollectionStore from '../../application/collection.store.js';
import { CreateHistoricalObjectCommand } from '../../domain/create-historical-object.command.js';
import CoinSelect from '../../../coins/presentation/components/coin-select.vue';

const router = useRouter();
const { t } = useI18n();
const collectionStore = useCollectionStore();

const selectedCollection = ref(null);
const selectedCoin = ref(null);
const summary = ref('');
const legends = ref('');
const errors = ref([]);
const saving = ref(false);

onMounted(() => {
  collectionStore.loadCollections();
});

watch(selectedCollection, () => {
  selectedCoin.value = null;
});

function validate() {
  const list = [];

  if (!selectedCollection.value) {
    list.push('historical-object-form.collection-required');
  }
  if (!selectedCoin.value) {
    list.push('historical-object-form.coin-required');
  }
  if (summary.value.trim() === '') {
    list.push('historical-object-form.summary-required');
  }
  if (legends.value.trim() === '') {
    list.push('historical-object-form.legends-required');
  }
  if (selectedCollection.value && !selectedCollection.value.canAddHistoricalObject()) {
    list.push('historical-object-form.collection-full');
  }

  errors.value = list;
  return list.length === 0;
}

async function create() {
  if (!validate()) {
    return;
  }

  saving.value = true;

  try {
    const command = new CreateHistoricalObjectCommand({
      name: selectedCoin.value.title,
      coinId: selectedCoin.value.id,
      collectionTypeId: selectedCoin.value.collectionTypeId,
      yearProduction: selectedCoin.value.yearProduction,
      coinCollectionId: selectedCollection.value.id,
      summary: summary.value.trim(),
      legends: legends.value.trim(),
      price: selectedCoin.value.price
    });
    await collectionStore.createHistoricalObject(command);
    router.push('/home');
  } catch (error) {
    errors.value = ['historical-object-form.save-error'];
  } finally {
    saving.value = false;
  }
}

function cancel() {
  router.push('/home');
}
</script>

<template>
  <section class="flex flex-column gap-3" aria-labelledby="new-item-title">
    <div>
      <h1 id="new-item-title">{{ t('historical-object-form.title') }}</h1>
      <p>{{ t('historical-object-form.subtitle') }}</p>
    </div>

    <pv-message v-if="collectionStore.error" severity="secondary" aria-live="polite">{{ t(collectionStore.error) }}</pv-message>

    <form class="flex flex-column gap-3 md:w-6" aria-label="New historical object form" @submit.prevent="create">
      <div class="flex flex-column gap-2">
        <label for="collection">{{ t('historical-object-form.collection') }}</label>
        <pv-select
          v-model="selectedCollection"
          input-id="collection"
          :options="collectionStore.collections"
          option-label="title"
          aria-label="Collection" />
      </div>

      <coin-select v-model="selectedCoin" :collection-type-id="selectedCollection ? selectedCollection.collectionTypeId : null" />

      <div class="flex flex-column gap-2">
        <label for="summary">{{ t('historical-object-form.summary') }}</label>
        <pv-textarea id="summary" v-model="summary" rows="3" aria-label="Summary" />
      </div>

      <div class="flex flex-column gap-2">
        <label for="legends">{{ t('historical-object-form.legends') }}</label>
        <pv-input-text id="legends" v-model="legends" aria-label="Legends" />
      </div>

      <div aria-live="polite" class="flex flex-column gap-1">
        <pv-message v-for="error in errors" :key="error" severity="secondary">{{ t(error) }}</pv-message>
      </div>

      <div class="flex gap-2">
        <pv-button type="submit" :label="t('historical-object-form.create')" outlined :disabled="saving" />
        <pv-button type="button" :label="t('historical-object-form.cancel')" outlined @click="cancel" />
      </div>
    </form>
  </section>
</template>
