<template>
  <AppLayout>
    <main>
      <div class="w-[200px]">
        <img :src="image.img" alt="" />
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';

const image = {
  name: 'Burger',
  img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723150238/c4400f1f2c8441cb7c6eea6844a79135-removebg-preview_kjh6gt.png',
};
</script>
