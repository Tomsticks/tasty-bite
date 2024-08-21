<template>
  <AppLayout>
    Profile Page

    <v-btn @click="logOut">Logout</v-btn>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { apiClient } from '@/helper/fetchApi';
import { useRouter } from 'vue-router';
import { ShowSnack } from '@/composable/useComponent';
const router = useRouter();
async function logOut() {
  try {
    const res = await apiClient('/api/auth/logout', 'GET');
    const res2 = await res.json();

    localStorage.removeItem('token');
    ShowSnack(res2.message, 'positive');
    router.push('/login');
  } catch (error) {}
}
</script>
