<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

function goHome() {
  router.push('/home');
}
</script>

<template>
  <section class="flex flex-column gap-2" aria-labelledby="not-found-title">
    <h1 id="not-found-title">{{ t('page-not-found.title') }}</h1>
    <p aria-live="polite">{{ t('page-not-found.message', { path: route.fullPath }) }}</p>
    <div>
      <pv-button :label="t('page-not-found.back-home')" outlined @click="goHome" />
    </div>
  </section>
</template>
