<template>
  <main class="login-box flex flex-col space-y-4 mt-28 py-4">
    <div class="top flex flex-col items-center">
      <p class="font-bold text-[30px]">Sign Up</p>
      <div class="flex items-center">
        <img class="" src="../assets/images/BiteBuddy.png" alt="" />
      </div>
    </div>

    <form class="flex flex-col gap-6 py-10" @submit.prevent>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            color="#FCC046"
            variant="outlined"
            label="Fullname"
            v-model="name"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            color="#FCC046"
            variant="outlined"
            label="Username"
            v-model="username"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            variant="outlined"
            label="E-mail"
            hide-details
            color="#FCC046"
            v-model="email"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            variant="outlined"
            color="#FCC046"
            label="Phone Number"
            v-model="number"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            variant="outlined"
            label="Password"
            hide-details
            color="#FCC046"
            v-model="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        @click="handleSubmit"
        :loading="loading"
        :disabled="loading"
        color="#FCC046"
        size="x-large"
        class="text-white"
        type="submit"
      >
        Create Account</v-btn
      >
      <p @click="$router.push('/login')">Already have an Account Login</p>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { apiClient } from '../helper/fetchApi.js';
import { ShowSnack } from '../composable/useComponent';
import { useRouter } from 'vue-router';
const router = useRouter();
const email = ref('');
const password = ref('');
const name = ref('');
const username = ref('');
const number = ref('');
let loading = ref(false);

const handleSubmit = async () => {
  if (
    !email.value ||
    !password.value ||
    !username.value ||
    !name.value ||
    !number.value
  ) {
    ShowSnack('Please fill in all fields', 'negative');
    loading.value = false;
    return;
  }

  try {
    loading.value = true;
    const res = await apiClient('/api/auth/register', 'POST', {
      email: email.value,
      password: password.value,
      name: name.value,
      username: username.value,
      number: number.value,
    });
    const data = await res.json();
    if (res.status == 400) {
      throw { err: data };
    }

    if (res.status == 200 || res.status == 201) {
      ShowSnack('Account Registred Successfully', 'positive');
      router.push('/login');
    }
  } catch (error) {
    loading.value = false;
    ShowSnack(error.err.code, 'negative');
  }
};
</script>
<style scoped>
.img {
  min-height: 45vh;
}
.login-box {
  min-height: 55vh;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
</style>
