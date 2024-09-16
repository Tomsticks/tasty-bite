<template>
  <div class="px-1">
    <slot />
    <v-layout class="" style="height: 56px">
      <v-bottom-navigation
        v-model="value"
        background-color="primary"
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
import { ref, onBeforeMount, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
const store = useBiteStore();

const router = useRouter();
const value = ref(0);
// console.log(userData);
async function fetchData() {
  try {
    const res = await apiClient('/api/user/user', 'GET');
    const res2 = await res.json();
    const user = res2.data.user.user[0];
    const token = res2.data.user.token;
    // console.log(userData);
    if (res.status == 201 || res.status == 200) {
      store.setUserData(user);
      store.setToken(token, true);
    }
    if (res.status == 401) {
      throw { err: res2 };
    }
  } catch (error) {
    ShowSnack('Session Closed, Please Login', 'negative');
    store.setToken(null, false);
    router.push('/login');
  }
}
onBeforeMount(() => {
  fetchData();
});
</script>
