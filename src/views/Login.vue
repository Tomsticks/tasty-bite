<template>
  <main class="login-box flex flex-col space-y-4 mt-28 py-4">
    <div class="top flex flex-col items-center">
      <p class="font-bold text-lg">Sign In</p>
      <div class="flex items-center">
        <img class="" src="../assets/images/BiteBuddy.png" alt="" />
      </div>
    </div>

    <form class="flex flex-col gap-6" @submit.prevent>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            variant="outlined"
            label="Email"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            variant="outlined"
            append-inner-icon="mdi-eye-slash"
            label="Password"
            v-model="password"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        density="compact"
        color="#FCC046"
        class="text-white"
        size="x-large"
        type="submit"
        :loading="loading"
        :disabled="loading"
        @click="handleSubmit"
        >Login
      </v-btn>
      <p @click="$router.push('/register')">Dont have an Account Register</p>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { apiClient } from '../helper/fetchApi.js';
import { ShowSnack } from '../composable/useComponent';
import { useBiteStore } from '../composable/usePinia';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
const email = ref('');
const password = ref('');
let store = useBiteStore();
// const {userData, token} = storeToRefs(store)
const router = useRouter();

let loading = ref(false);
const handleSubmit = async (e) => {
  if (!email.value || !password.value) {
    ShowSnack('Please fill in all fields', 'negative');
    loading.value = false;
    return;
  }
  try {
    loading.value = true;
    const res = await apiClient('/api/auth/login', 'POST', {
      email: email.value,
      password: password.value,
    });
    const data = await res.json();
    // const token = data.

    if (res.status == 400) {
      throw { err: data.error.code };
    }

    if (res.status == 200 || res.status == 201) {
      ShowSnack('Successfully Logged In', 'positive');
      const user = data.user[0];
      const token = data.token;

      store.setUserData(user);
      store.setToken(token, true);
      router.push('/home');
    }
  } catch (error) {
    loading.value = false;
    if (error.err == 'auth/invalid-email') {
      ShowSnack('Invalid Email Or Password', 'negative');
    } else if (error.err == 'auth/user-not-found') {
      ShowSnack('Email Not found', 'negative');
    } else if (error.err == 'auth/missing-email') {
      ShowSnack('Provide Email Or Password', 'negative');
    } else if (error.err == 'auth/wrong-password') {
      ShowSnack('Incorrect Password. Try Again!', 'negative');
    } else if (error.err == 'auth/too-many-requests') {
      ShowSnack(
        'Account Disabled. To Many Attempted Failed Login. Reset Your Password',
        'negative'
      );
    } else if (error.err == 'Please fill in all fields') {
      ShowSnack('Please fill in all fields', 'negative');
    } else {
      ShowSnack(error.err, 'negative');
    }
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
