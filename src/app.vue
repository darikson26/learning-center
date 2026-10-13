<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './shared/presentation/components/language-switcher.vue';

const { t } = useI18n();
const logoUrl = `${import.meta.env.VITE_LOGO_DEV_URL}/money.org?token=${import.meta.env.VITE_LOGO_DEV_TOKEN}`;
const logoFailed = ref(false);
</script>

<template>
  <pv-toolbar aria-label="Main toolbar">
    <template #start>
      <div class="flex align-items-center gap-3">
        <img v-if="!logoFailed" :src="logoUrl" alt="American Numismatic Association logo" width="40" height="40" @error="logoFailed = true" />
        <span v-else>ANA</span>
        <span>The ANA helps people discover and explore the world of money through its vast array of educational programs including its museum, library, conventions, seminars, publications and outreach programs.</span>
      </div>
    </template>
    <template #end>
      <language-switcher />
    </template>
  </pv-toolbar>
  <div class="grid m-0">
    <nav class="col-12 md:col-2 flex flex-column gap-2 p-3 border-right-1 surface-border" aria-label="Sidebar">
      <pv-button as="router-link" to="/home" :label="t('sidebar.home')" text />
      <pv-button as="router-link" to="/historicalobjects/items/new" :label="t('sidebar.new-item')" text />
    </nav>
    <main class="col-12 md:col-10 app-content">
      <router-view />
    </main>
  </div>
</template>
