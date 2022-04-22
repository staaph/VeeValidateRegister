<template>

    <div
        class="bg-slate-300 border-black border dark:border-none dark:bg-gray-800 w-11/12 sm:w-1/2 lg:w-1/3 rounded-lg py-4 px-8">
        <h1 class="font-bold text-center mb-4 text-xl text-black dark:text-white">
            Register
        </h1>
        <vee-form class="flex flex-col" :validation-schema="schema" @submit="onSubmit">
            <!-- USERNAME -->
            <div class="flex flex-col mb-2">
                <label for="username" class="text-black dark:text-gray-300 pb-1 font-semibold text-sm">Username</label>
                <div
                    class="flex bg-slate-400 dark:bg-gray-700 outline-none p-2 items-center text-black dark:text-gray-50 rounded">
                    <vee-field name="username" placeholder="John Doe"
                        class="bg-slate-400 dark:bg-gray-700 outline-none w-full px-1" />
                </div>
                <ErrorMessage name="username" class="text-sm text-red-600" />
            </div>

            <!-- E-MAIL -->
            <div class="flex flex-col my-2">
                <label for="email" class="text-black dark:text-gray-300 pb-1 font-semibold text-sm">E-Mail</label>
                <div
                    class="flex bg-slate-400 dark:bg-gray-700 outline-none p-2 items-center text-black dark:text-gray-50 rounded">

                    <vee-field type="email" name="email" placeholder="john.doe@email.com"
                        class="bg-slate-400 dark:bg-gray-700 outline-none w-full px-1" />
                </div>
                <ErrorMessage name="email" class="text-sm text-red-600" />
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
            <!-- CONFIRM PASSWORD-->
            <div class="flex flex-col mt-2">
                <label for="confirm_password"
                    class="text-black dark:text-gray-300 pb-1 font-semibold text-sm">Username</label>
                <div
                    class="flex bg-slate-400 dark:bg-gray-700 outline-none p-2 items-center text-black dark:text-gray-50 rounded">
                    <vee-field name="confirm_password" placeholder="confirm password" type="password"
                        class="bg-slate-400 dark:bg-gray-700 outline-none w-full px-1" />
                </div>
                <ErrorMessage name="confirm_password" class="text-sm text-red-600" />
            </div>
            <div class="flex items-center justify-center w-full">
                <button
                    class="mt-2 font-semibold leading-none text-white py-3 px-5 bg-blue-700 rounded-lg hover:bg-blue-600 active:scale-90">
                    Sign up
                </button>
            </div>
            <div class="flex justify-center mt-2 text-sm">
                <p class="dark:text-white">Already have an account? Sign in</p>
            </div>
        </vee-form>
    </div>

</template>

<script setup>

const schema = {
    email: 'required|email',
    username: 'required|min:3|max:20',
    password: 'min:3'
}

const onSubmit = (values) => {
    console.log(values);
}

</script>
