<template>
  <AppLayout>
    <main class="">
      <nav class="flex justify-between py-2 shadow-md bg-white">
        <div class="location_bar">
          <div class="location_bar__text text-[gray] py- w-[200px] border-[]">
            <v-icon>mdi-map-marker</v-icon> Los Angles
          </div>
        </div>
        <div>
          <v-icon size="25"> mdi-bell</v-icon>
        </div>
      </nav>

      <header class="">
        Welcome,
        <span class="text-[#FCC046] font-bold tex"
          >{{ userData.username }} Tomzor</span
        >
        <p>Find your delicious dish</p>
      </header>
      <section class="pb-1">
        <v-text-field
          @click="$router.push('/search')"
          class="shadow-md"
          append-inner-icon="mdi-magnify"
          label="Search your food..."
          variant="solo"
          hide-details
          single-line
        ></v-text-field>
      </section>
      <!-- Graphic Section -->
      <section class="py-2">
        <div class="flex items-center justify-center h-0vh]">
          <v-img
            aspect-ratio="4/3"
            src="https://res.cloudinary.com/dvrpodtdw/image/upload/v1724416994/16f8568d-5c0b-11ed-a676-161732b6f9bd_1_uj8kk0.jpg"
            alt=""
            class="w-[100%] h-[100%]"
          />
        </div>
      </section>

      <section>
        <div class="avaliable flex justify-between">
          <div v-for="(item, index) in foods" :key="index">
            <div
              class="flex justify-between items-center shadow-md px-1 rounded-lg bg-white"
            >
              <p>{{ item.name }}</p>
              <img class="w-10 sm:w-20" :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="">
        <div class="">
          <h6>Popular For You</h6>
          <p @click="$router.push('/login')">Show all</p>
        </div>
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
import { storeToRefs } from 'pinia';
const num = ref(2);

const store = useBiteStore();
const { userData } = storeToRefs(store);
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

<style scoped>


</style>