<script lang="ts">
	import Profile from '$lib/Profile.svelte';
	import '../app.css';
	import { page } from '$app/stores';
    import ToggleDarkMode from '$lib/ToggleDarkMode.svelte';
	let { children } = $props();
	import '../css/global.css';
</script>

<div class="sticky top-0 flex w-full justify-between bg-background-2/20 rounded-lg p-3 backdrop-blur-md flex-wrap">
	<div class="flex items-center gap-2">
		<Profile></Profile>
	</div>
	<div class="flex items-center gap-4 flex-wrap">
		<a
			href="/"
			class="transition duration-300">Home</a
		>

		{#if !$page.data.user}
			<a href="/login" class="transition duration-300"
				>Login</a
			>
		{/if}

		<ToggleDarkMode></ToggleDarkMode>
	</div>
</div>


{@render children()}
