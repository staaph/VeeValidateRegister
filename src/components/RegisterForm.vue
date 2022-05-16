<template>
  <vee-form
    class="flex flex-col"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <!-- USERNAME -->
    <section class="flex flex-col mb-2">
      <div class="flex flex-row justify-between">
        <label
          for="username"
          class="text-black dark:text-gray-300 pb-1 font-semibold text-sm"
          >Username</label
        >
        <ErrorMessage name="username" class="text-sm text-red-600" />
      </div>
      <vee-field
        name="username"
        placeholder="John Doe"
        class="bg-slate-400 dark:bg-gray-700 outline-none w-full flex p-2 items-center text-black dark:text-gray-50 rounded"
      />
    </section>

    <!-- E-MAIL -->
    <section class="flex flex-col my-2">
      <div class="flex flex-row justify-between">
        <label
          for="email"
          class="text-black dark:text-gray-300 pb-1 font-semibold text-sm"
          >E-Mail</label
        >
        <ErrorMessage name="email" class="text-sm text-red-600" />
      </div>
      <vee-field
        type="email"
        name="email"
        placeholder="john.doe@email.com"
        class="bg-slate-400 dark:bg-gray-700 outline-none w-full flex p-2 items-center text-black dark:text-gray-50 rounded"
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
        class="flex items-center text-black dark:text-gray-50 rounded p-2 bg-slate-400 dark:bg-gray-700"
      >
        <vee-field
          v-if="!showPassword"
          name="password"
          placeholder="password"
          type="password"
          class="bg-slate-400 dark:bg-gray-700 outline-none w-full"
        />
        <vee-field
          v-if="showPassword"
          name="password"
          placeholder="password"
          type="text"
          class="bg-slate-400 dark:bg-gray-700 outline-none w-full"
        />
        <button @click="togglePassword">
          <EyesIcon v-if="!showPassword" />
          <EyesOff v-if="showPassword" />
        </button>
      </div>
    </section>
    <!-- CONFIRM PASSWORD-->
    <section class="flex flex-col mt-2">
      <div class="flex flex-row justify-between">
        <label
          for="confirm_password"
          class="text-black dark:text-gray-300 pb-1 font-semibold text-sm"
          >Confirm password</label
        >
        <ErrorMessage name="confirm_password" class="text-sm text-red-600" />
      </div>

      <div
        class="flex items-center text-black dark:text-gray-50 rounded p-2 bg-slate-400 dark:bg-gray-700"
      >
        <vee-field
          v-if="!showPassword"
          name="confirm_password"
          placeholder="confirm password"
          type="password"
          class="bg-slate-400 dark:bg-gray-700 outline-none w-full"
        />
        <vee-field
          v-if="showPassword"
          name="confirm_password"
          placeholder="confirm password"
          type="text"
          class="bg-slate-400 dark:bg-gray-700 outline-none w-full"
        />

        <button @click="togglePassword">
          <EyesIcon v-if="!showPassword" />
          <EyesOff v-if="showPassword" />
        </button>
      </div>
    </section>
    <!-- ACCEPT TOS -->
    <section class="mt-2 flex flex-col justify-center items-center">
      <div class="flex flex-row w-full justify-center items-center">
        <vee-field type="checkbox" name="tos" value="1" />
        <label class="pl-2 dark:text-white"
          >Accept <a href="#" class="text-blue-500">Terms of service</a></label
        >
      </div>
      <ErrorMessage name="tos" class="text-red-600 text-sm" />
    </section>
    <div class="flex items-center justify-center w-full">
      <button
        class="mt-4 font-semibold leading-none text-white py-3 px-5 bg-blue-700 rounded-lg hover:bg-blue-600 active:scale-90"
      >
        Sign up
      </button>
    </div>
  </vee-form>
</template>

<script setup>
import { ref } from 'vue';
import EyesIcon from '@/assets/icons/EyesIcon.vue';
import EyesOff from '@/assets/icons/EyesOff.vue';

const schema = {
  email: 'required|email',
  username: 'required|min:3|max:20',
  password: 'min:8|required',
  confirm_password: 'passwords_mismatch:@password|confirm_password',
  tos: 'tos',
};

const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};
</script>
