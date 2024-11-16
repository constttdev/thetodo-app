<script>
	import { enhance } from '$app/forms';
	export let form;
	const registration = false;
</script>

{#if registration}
	<div class="flex">
		<div class="-mt-28 grid h-screen w-1/2 items-center justify-center bg-white dark:bg-darkmode">
			<form action="/register?/register" method="POST" use:enhance>
				<div class="flex flex-col gap-4">
					<label for="username" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white"
						>Username</label
					>
					<input
						type="text"
						class="border-1 block w-96 overflow-hidden rounded-lg border border-gray-500 bg-gray-300 bg-slate-400/5 p-2 text-left text-sm text-black dark:bg-darkmode dark:text-white"
						name="username"
					/>
				</div>
				<div class="mt-4 flex flex-col gap-4">
					<label for="password" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white"
						>Password</label
					>
					<input
						minlength="8"
						type="password"
						class="border-1 block w-96 overflow-hidden rounded-lg border border-gray-500 bg-gray-300 bg-slate-400/5 p-2 text-left text-sm text-black dark:bg-darkmode dark:text-white"
						name="password"
					/>
				</div>
				<div class="mt-4 flex flex-col gap-4">
					<label for="email" class="mb-0 block text-sm font-medium text-gray-900 dark:text-white"
						>EMail</label
					>
					<input
						type="email"
						class="border-1 block w-96 overflow-hidden rounded-lg border border-gray-500 bg-gray-300 bg-slate-400/5 p-2 text-left text-sm text-black dark:bg-darkmode dark:text-white"
						name="email"
					/>
				</div>

				<div class="mt-4 flex flex-col gap-4">
					<button
						class="border-1 mb-0 mt-8 block rounded-lg border border-gray-500 bg-gray-300 bg-slate-400/5 p-2 text-sm font-medium text-gray-900 dark:text-white"
						>Register</button
					>
				</div>
			</form>
		</div>
		<div class="h-screen w-1/2 bg-white dark:bg-darkmode">
			<p
				class="p-4 font-inter text-5xl font-bold text-black drop-shadow-glow dark:text-white dark:drop-shadow-glow"
			>
				Hey, friend!
			</p>
			<p class="p-4 text-lg text-black dark:text-white">
				You already got a Account? <a href="/login" class="text-blue-500N">Login</a>
			</p>
		</div>
	</div>
{:else}
	<div class="w-full justify-items-center">
		<h1 class="text-4xl font-bold text-rose-500">Hey! Registration is currently disabled!</h1>
	</div>
{/if}
