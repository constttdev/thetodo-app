<script lang="ts">
	import Profile from '$lib/Profile.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import ToggleDarkMode from '$lib/ToggleDarkMode.svelte';
	let { children } = $props();
	import '../css/global.css';
</script>

<div
	class="bg-background-2/20 sticky top-0 flex w-full flex-wrap justify-between rounded-lg p-3 backdrop-blur-md"
>
	<div class="flex items-center gap-2">
		<Profile></Profile>
	</div>
	<div class="flex flex-wrap items-center gap-4">
		<a href="/" class="transition duration-300">Home</a>

		{#if !$page.data.user}
			<a href="/login" class="transition duration-300">Login</a>
		{/if}
		{#if $page.data.user}
			<a href="/dashboard" class="transition duration-300">Dashboard</a>
		{/if}

		<ToggleDarkMode></ToggleDarkMode>
	</div>
</div>

{@render children()}
