<script>
	import { enhance } from '$app/forms';
	import ToggleDarkMode from "$lib/ToggleDarkMode.svelte";
    export let form;
</script>

<div class="flex">
    <div class="h-screen w-1/2 bg-white dark:bg-darkmode justify-center items-center grid -mt-28">
        <form action="/login?/login" method="POST" use:enhance>
            <div class="flex flex-col gap-4">
                <label for="username" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" class="border-1 block w-96 overflow-hidden rounded-lg bg-gray-300 border border-gray-500 bg-slate-400/5 p-2 text-left text-sm text-black dark:text-white dark:bg-darkmode" name="username">
            </div>
            <div class="flex flex-col gap-4 mt-4">
                <label for="password" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" class="border-1 block w-96 overflow-hidden rounded-lg bg-gray-300 border border-gray-500 bg-slate-400/5 p-2 text-left text-sm text-black dark:text-white dark:bg-darkmode" name="password">
            </div>
            <div class="flex flex-col gap-4 mt-4">
                <button class="mb-0 block text-sm font-medium text-gray-900 dark:text-white bg-gray-300 border border-gray-500 bg-slate-400/5 border-1 rounded-lg p-2 mt-8">Login</button>
            </div>
        </form>
    </div>
    <div class="h-screen w-1/2 bg-darkmode dark:bg-white">
        <p class="text-white dark:text-black font-inter text-8xl font-bold p-4 drop-shadow-glow dark:drop-shadow-glow">New here?</p>
        <p class="text-white dark:text-black text-lg p-4">If you are new here, just create a new Account! <a href="/register" class="text-rose-300">Register</a></p>
    </div>
</div>

