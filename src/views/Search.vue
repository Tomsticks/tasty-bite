<template>
  <div class="px-1">
    <section class="my-2">
      <v-text-field
        class="shadow-md"
        append-inner-icon="mdi-magnify"
        label="Search your food..."
        variant="outlined"
        hide-details
        single-line
        color="#FCC046"
      ></v-text-field>
    </section>

    <section class="flex mt-52 justify-center items-center">
      <div class="flex flex-col items-center justify-center">
        <div class="w-32">
          <img
            src="https://i.pinimg.com/564x/ca/b2/4b/cab24bec8f6e5094fb7a5b8ad8b6f469.jpg"
            alt=""
          />
        </div>

        <p>Search Restaurants</p>
        <p class="text-[grey]">Search your favourite cuisine and restaurants</p>
      </div>
    </section>
  </div>
</template>
<script setup></script>
