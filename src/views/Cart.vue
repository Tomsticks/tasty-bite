<template>
  <AppLayout>
    <nav>My cart</nav>
    <header class="flex justify-between mt-3">
      <p class="font-bold">{{ added }} items Added</p>
      <div class="flex justify-between items-center">
        <p @click="$router.push('/home')">Add more</p>
        <v-icon> mdi-chevron-right</v-icon>
      </div>
    </header>
    <Cart />
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Cart from '@/components/cart.vue';
const added = ref(2);
</script>
