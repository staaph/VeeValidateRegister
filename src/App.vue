<template>
  <main
    class="flex justify-center items-center min-h-screen w-full dark:bg-gradient-to-br dark:from-gray-500 dark:via-gray-600 dark:to-gray-500 dark:bg-gray-300"
  >
    <div class="absolute top-3 right-5 dark:text-white text-black">
      <button @click="toggleTheme" v-if="userTheme === 'light'">
        <MoonIcon />
      </button>
      <button @click="toggleTheme" v-if="userTheme === 'dark'">
        <SunIcon />
      </button>
    </div>
    <section
      class="my-16 bg-slate-300 border-black border dark:border-none dark:bg-gray-800 w-11/12 sm:w-1/2 lg:w-1/3 rounded-lg py-4 px-8"
    >
      <div v-if="showLogin">
        <h2
          class="font-bold text-center mb-4 text-xl text-black dark:text-white"
        >
          Login
        </h2>
        <Login />
        <p class="flex justify-center mt-3 text-sm dark:text-white">
          No account yet?
          <span @click="showLogin = false" class="cursor-pointer text-blue-600"
            >&nbsp;Sign up&nbsp;</span
          >instead
        </p>
      </div>
      <div v-else>
        <h2
          class="font-bold text-center mb-4 text-xl text-black dark:text-white"
        >
          Sign up
        </h2>
        <Register />
        <p class="flex justify-center mt-3 text-sm dark:text-white">
          Already registered?
          <span @click="showLogin = true" class="cursor-pointer text-blue-600"
            >&nbsp;Login&nbsp;</span
          >instead
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import Register from '@/components/RegisterForm.vue';
import Login from '@/components/LoginForm.vue';
import { ref, onMounted } from 'vue';
import useDarkMode from '@/plugin/useDarkMode.js';
import SunIcon from '@/assets/icons/SunIcon.vue';
import MoonIcon from '@/assets/icons/MoonIcon.vue';

const { getTheme, setTheme, getMediaPreference, toggleTheme, userTheme } =
  useDarkMode();

const showLogin = ref(true);

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});
</script>
