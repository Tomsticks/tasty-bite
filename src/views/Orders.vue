<template>
  <AppLayout>
    <nav class="flex justify-between items-center py-2 bg-white">
      <div
        @click="$router.back()"
        class="location_bar__text text-[gray] flex items-center space-x-9"
      >
        <v-icon size="40">mdi-chevron-left</v-icon>
      </div>
      <div class="w-[70%] flex items-center">
        <p>Your Orders</p>
      </div>
    </nav>

    <!-- <section
      v-if="orders.length == 0"
      class="flex flex-col items-center justify-center"
    >
      <div class="w-[50%] mt-28">
        <img
          src="https://res.cloudinary.com/dvrpodtdw/image/upload/v1724425375/d0c29f0fd6e75920bf53941157f5bb72-removebg-preview_fk8zxo.png"
          alt=""
        />
      </div>
      <P>No Order Avaliable</P>
    </section> -->

    <section class="Orders space-y-3">
      <v-card
        v-for="(order, index) in orders"
        :key="index"
        variant="elevated"
        class="mx-auto sp"
      >
        <v-skeleton-loader
          v-if="loading"
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>

        <v-card-item v-if="ava">
          <div class="flex items-center space-x-7">
            <div class="order__item__image w-[70px] h-10 rounded-lg">
              <img
                class="rounded-[200px]"
                :src="order.imageUrl"
                :alt="order.foodName"
              />
            </div>
            <div>
              <div class="flex justify-between">
                <p class="ma-0 pa-0 text-sm font-light mb-1">
                  {{ order.foodName }}
                </p>
                <p class="ma-0 pa-0 text-sm font-light mb-1">
                  <!-- {{ order.orderName }} -->
                </p>
              </div>

              <p class="ma-0 pa-0 text-sm font-light mb-1">
                {{ order.restaurant }}
              </p>
              <p
                class="ma-0 pa-0 text-sm font-bold mb-1"
                :class="{
                  'text-[red]': order.status == 'Cancelled',
                  'text-[green]': order.status == 'Delivered',
                  'text-[orange]': order.status == 'In-Progress',
                }"
              >
                {{ order.status }}
              </p>
            </div>
          </div>
          <div class="flex justify-end">
            <v-btn
              class="bg-primary"
              :disabled="order.status == 'Delivered'"
              @click="$router.push(`/order/${'jdjd'}`)"
              >View Order</v-btn
            >
          </div>

          <!-- <v-btn>View Order</v-btn> -->
        </v-card-item>
      </v-card>
    </section>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
import { ref } from 'vue';
const loading = ref(false);
const ava = ref(true);
const orders = ref([
  {
    id: '1',
    orderName: 'Order #1001',
    restaurant: 'La Bella Pizzeria',
    status: 'Delivered',
    dateOrdered: '2024-08-01',
    typeOfFood: 'Italian',
    foodName: 'Margherita Pizza',
    imageUrl:
      'https://i.pinimg.com/564x/34/cd/98/34cd98a30cd58f85e25e56a9030ca06c.jpg',
  },
  {
    id: '2',
    orderName: 'Order #1002',
    restaurant: 'Sushi Samurai',
    status: 'In-Progress',
    dateOrdered: '2024-08-02',
    typeOfFood: 'Japanese',
    foodName: 'Salmon Sashimi',
    imageUrl:
      'https://res.cloudinary.com/dvrpodtdw/image/upload/v1724420823/f8c908d3a7c4d0dcb0573213dd859730-removebg_eqa72t.png',
  },
  {
    id: '3',
    orderName: 'Order #1003',
    restaurant: 'Taco Fiesta',
    status: 'Cancelled',
    dateOrdered: '2024-08-03',
    typeOfFood: 'Mexican',
    foodName: 'Chicken Tacos',
    imageUrl:
      'https://res.cloudinary.com/dvrpodtdw/image/upload/v1724420892/755914a5f2144f70a33878338b8ee922-removebg-preview_xydcmz.png',
  },
  {
    id: '1',
    orderName: 'Order #1001',
    restaurant: 'La Bella Pizzeria',
    status: 'Delivered',
    dateOrdered: '2024-08-01',
    typeOfFood: 'Italian',
    foodName: 'Margherita Pizza',
    imageUrl:
      'https://i.pinimg.com/564x/34/cd/98/34cd98a30cd58f85e25e56a9030ca06c.jpg',
  },
  {
    id: '2',
    orderName: 'Order #1002',
    restaurant: 'Sushi Samurai',
    status: 'In-Progress',
    dateOrdered: '2024-08-02',
    typeOfFood: 'Japanese',
    foodName: 'Salmon Sashimi',
    imageUrl:
      'https://res.cloudinary.com/dvrpodtdw/image/upload/v1724420823/f8c908d3a7c4d0dcb0573213dd859730-removebg_eqa72t.png',
  },
  {
    id: '1',
    orderName: 'Order #1001',
    restaurant: 'La Bella Pizzeria',
    status: 'Delivered',
    dateOrdered: '2024-08-01',
    typeOfFood: 'Italian',
    foodName: 'Margherita Pizza',
    imageUrl:
      'https://i.pinimg.com/564x/34/cd/98/34cd98a30cd58f85e25e56a9030ca06c.jpg',
  },
  {
    id: '2',
    orderName: 'Order #1002',
    restaurant: 'Sushi Samurai',
    status: 'In-Progress',
    dateOrdered: '2024-08-02',
    typeOfFood: 'Japanese',
    foodName: 'Salmon Sashimi',
    imageUrl:
      'https://res.cloudinary.com/dvrpodtdw/image/upload/v1724420823/f8c908d3a7c4d0dcb0573213dd859730-removebg_eqa72t.png',
  },
]);
</script>
