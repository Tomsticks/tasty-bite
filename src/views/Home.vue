<template>
  <AppLayout>
    <main class="space-y-4">
      <!-- Graphic Section -->
      <section class="w-[100%] h-auto">
        <div class="">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-banner-display-ads-design-template-de3bb854b3eb64b3b9ca7144ce05b142_screen.jpg?ts=1644218341"
            alt=""
            class=""
          />
        </div>
      </section>
      <section>
        <v-card-text>
          <v-text-field
            class="shadow-md"
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search your food..."
            variant="solo"
            hide-details
            single-line
          ></v-text-field>
        </v-card-text>
      </section>

      <section>
        <div class="avaliable flex justify-between">
          <div v-for="(item, index) in foods" :key="index">
            <div
              class="flex justify-between items-center shadow-md px-1 rounded-lg bg-white"
            >
              <p>{{ item.name }}</p>
              <img class="w-10 sm:w-52" :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="">
        <h2>Popular For You</h2>
        <div class="grid grid-cols-2 gap-3 pb-20">
          <div v-for="(item, index) in Popular" :key="index">
            <div
              class="bg-white flex flex-col px-4 py-4 shadow-lg rounded-md relative"
            >
              <div class="absolute right-1">
                <v-icon color="#FCC046">mdi-heart-outline</v-icon>
              </div>

              <img class="w-20 self-center" :src="item.img" alt="" />
              <p>{{ item.name }}</p>
              <div class="flex justify-between">
                <div>
                  <v-icon color="#FCC046" size="sm">mdi-star</v-icon>
                  <v-icon color="#FCC046" size="sm">mdi-star</v-icon>
                  <v-icon color="#FCC046" size="sm">mdi-star</v-icon>
                </div>
                <p>${{ item.amount }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </AppLayout>
</template>
<script setup>
import { ref } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { useBiteStore } from '@/composable/usePinia';
const num = ref(2);
const store = useBiteStore()
const foods = ref([
  {
    name: 'Pizza',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723150147/17a35186b24956a8980362b66fe59289-removebg-preview_1_xjyhef.png',
  },
  {
    name: 'Burger',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723150238/c4400f1f2c8441cb7c6eea6844a79135-removebg-preview_kjh6gt.png',
  },
  {
    name: 'Subway',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723150279/6d09049cdfec6315c7838c2bea301f9f-removebg-preview_lnxz7s.png',
  },
]);

const Popular = ref([
  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
  },
  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
  },
  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
  },
  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
  },
  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
  },
  {
    name: 'Double Beef',
    img: 'https://res.cloudinary.com/dvrpodtdw/image/upload/v1723191305/14a6f08bc6c530ef875789dfcb477646-removebg-preview_vnetxx.png',
    amount: 18,
  },
]);
</script>
