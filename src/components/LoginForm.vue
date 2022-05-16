<template>
  <vee-form
    class="flex flex-col"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <!-- E-MAIL or USERNAME-->
    <section class="flex flex-col my-2">
      <div class="flex flex-row justify-between">
        <label
          for="login"
          class="text-black dark:text-gray-300 pb-1 font-semibold text-sm"
          >E-Mail or Username</label
        >
        <ErrorMessage name="login" class="text-sm text-red-600" />
      </div>
      <vee-field
        type="email"
        name="login"
        placeholder="john.doe@email.com / johndoe"
        class="placeholder:text-gray-500 bg-slate-400 dark:bg-gray-700 outline-none w-full flex p-2 items-center text-black dark:text-gray-50 rounded"
      />
    </section>
    <!-- PASSWORD -->
    <section class="flex flex-col my-2">
      <div class="flex flex-row justify-between">
        <label
          for="password"
          class="text-black dark:text-gray-300 pb-1 font-semibold text-sm"
          >Password</label
        >
        <ErrorMessage name="password" class="text-sm text-red-600" />
      </div>
      <div
        class="flex flex-rowp-2 items-center p-2 bg-slate-400 dark:bg-gray-700 text-black dark:text-gray-50 rounded"
      >
        <vee-field
          v-if="!showPassword"
          name="password"
          placeholder="password"
          type="password"
          class="bg-slate-400 dark:bg-gray-700 outline-none w-full rounded placeholder:text-gray-500"
        />
        <vee-field
          v-if="showPassword"
          name="password"
          placeholder="password"
          type="text"
          class="bg-slate-400 dark:bg-gray-700 outline-none w-full rounded placeholder:text-gray-500"
        />
        <button @click="togglePassword">
          <EyesIcon v-if="!showPassword" />
          <EyesOff v-if="showPassword" />
        </button>
      </div>
    </section>
    <div class="flex items-center justify-center w-full">
      <button
        class="mt-4 font-semibold leading-none text-white py-3 px-5 bg-blue-700 rounded-lg hover:bg-blue-600 active:scale-90"
      >
        Login
      </button>
    </div>
  </vee-form>
</template>

<script setup>
import { ref } from 'vue';
import EyesIcon from '@/assets/icons/EyesIcon.vue';
import EyesOff from '@/assets/icons/EyesOff.vue';

const schema = {
  login: 'required',
  password: 'required',
};

const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const onSubmit = (values) => {
  console.log(values);
};
</script>
