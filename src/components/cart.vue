<template>
  <main v-for="items in dummy" class="bg-[#f8f8f8] py-3">
    <div class="flex gap-6 items-center">
      <img class="w-[20%] bg-white" :src="items.img" alt="" />
      <div class="flex flex-col">
        <h6 class="text-sm">{{ items.name }}</h6>
        <h6 class="text-sm w-[200px]">
          {{ items.details }}
        </h6>
        <div class="my-3">
          <v-btn size="20">+</v-btn>
          <v-btn size="20">-</v-btn>
        </div>
      </div>
    </div>
  </main>
  <div class="flex items-center justify-center mb-6 mt-2">
    <v-btn
      density="compact"
      color="#FCC046"
      class="text-white self-center w-[100%]"
      size="x-large"
      type="submit"
    >
      Checkout</v-btn
    >
  </div>
</template>
<script setup>
import { ref } from 'vue';
const dummy = ref([
  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit..',
  },

  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit..',
  },

  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit..',
  },

  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit..',
  },

  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit..',
  },
]);
</script>
