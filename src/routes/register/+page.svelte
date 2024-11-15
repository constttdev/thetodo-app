<script>
	import { enhance } from '$app/forms';
	import ToggleDarkMode from "$lib/ToggleDarkMode.svelte";
    export let form;
</script>

<div class="flex">
    <div class="h-screen w-1/2 bg-white dark:bg-darkmode justify-center items-center grid -mt-28">
        <form action="/register?/register" method="POST" use:enhance>
            <div class="flex flex-col gap-4">
                <label for="username" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" class="border-1 block w-96 overflow-hidden rounded-lg bg-gray-300 border border-gray-500 bg-slate-400/5 p-2 text-left text-sm text-black dark:text-white dark:bg-darkmode" name="username">
            </div>
            <div class="flex flex-col gap-4 mt-4">
                <label for="password" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" class="border-1 block w-96 overflow-hidden rounded-lg bg-gray-300 border border-gray-500 bg-slate-400/5 p-2 text-left text-sm text-black dark:text-white dark:bg-darkmode" name="password">
            </div>
            <div class="flex flex-col gap-4 mt-4">
                <label for="email" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white">EMail</label>
                <input type="email" class="border-1 block w-96 overflow-hidden rounded-lg bg-gray-300 border border-gray-500 bg-slate-400/5 p-2 text-left text-sm text-black dark:text-white dark:bg-darkmode" name="email">
            </div>
            
            <div class="flex flex-col gap-4 mt-4">
                <button class="mb-0 block text-sm font-medium text-gray-900 dark:text-white bg-gray-300 border border-gray-500 bg-slate-400/5 border-1 rounded-lg p-2 mt-8">Register</button>
            </div>
        </form>
    </div>
    <div class="h-screen w-1/2 bg-white dark:bg-darkmode">
        <p class="text-black dark:text-white font-inter text-5xl font-bold p-4 drop-shadow-glow dark:drop-shadow-glow">Hey, friend!</p>
        <p class="text-black dark:text-white text-lg p-4">You already got a Account? <a href="/login" class="text-blue-500N">Login</a></p>
    </div>
</div>