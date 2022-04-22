<template>
    <vee-form class="flex flex-col" :validation-schema="schema" @submit="onSubmit">
        <!-- E-MAIL or USERNAME-->
        <div class="flex flex-col my-2">
            <label for="login" class="text-black dark:text-gray-300 pb-1 font-semibold text-sm">E-Mail or
                Username</label>
            <div
                class="flex bg-slate-400 dark:bg-gray-700 outline-none p-2 items-center text-black dark:text-gray-50 rounded">

                <vee-field type="email" name="login" placeholder="john.doe@email.com / johndoe"
                    class="bg-slate-400 dark:bg-gray-700 outline-none w-full px-1" />
            </div>
            <ErrorMessage name="login" class="text-sm text-red-600" />
        </div>
        <!-- PASSWORD -->
        <div class="flex flex-col my-2">
            <label for="password" class="text-black dark:text-gray-300 pb-1 font-semibold text-sm">Password</label>
            <div
                class="flex bg-slate-400 dark:bg-gray-700 outline-none p-2 items-center text-black dark:text-gray-50 rounded">
                <vee-field name="password" placeholder="password" type="password"
                    class="bg-slate-400 dark:bg-gray-700 outline-none w-full px-1" />
            </div>
            <ErrorMessage name="password" class="text-sm text-red-600" />
        </div>
        <div class="flex items-center justify-center w-full">
            <button
                class="mt-4 font-semibold leading-none text-white py-3 px-5 bg-blue-700 rounded-lg hover:bg-blue-600 active:scale-90">
                Login
            </button>
        </div>
    </vee-form>
</template>

<script setup>
const schema = {
    login: 'required',
    password: 'required'
}

const onSubmit = (values) => {
    console.log(values)
}
</script>