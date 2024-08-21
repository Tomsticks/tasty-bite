<template>
  <div class="px-3">
    <header class="my-3">Welcome, {{ userData.username }}</header>
    <div class="grid"></div>
    <v-layout class="overflow-visible" style="height: 56px">
      <slot />
      <v-bottom-navigation
        v-model="value"
        color="#FCC046"
        class="text-gary"
        active
        grow
      >
        <v-btn to="/home">
          <v-icon>mdi-home</v-icon>

          Home
        </v-btn>

        <v-btn to="/orders">
          <v-icon>mdi-book</v-icon>

          Orders
        </v-btn>
        <v-btn to="/cart">
          <v-icon>mdi-cart</v-icon>
          Cart
        </v-btn>

        <v-btn to="/profile">
          <v-icon>mdi-account</v-icon>

          <span>Profile</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </div>
</template>
<script setup>
import { useBiteStore } from '@/composable/usePinia';
import { apiClient } from '@/helper/fetchApi';
import { ShowSnack } from '@/composable/useComponent';
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
const store = useBiteStore();
const userData = store.userData;
const router = useRouter();
const value = ref(0);
const fetchDatas = async () => {
  const res = await apiClient('/api/user/user', 'GET');
  // console.log(res);
  if (res.status == 401) {
    ShowSnack('Session Closed, Please Login', 'negative');
    router.push('/login');
  }
};
fetchDatas();
</script>
