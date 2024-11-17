<script lang="ts">
	import { enhance } from '$app/forms';
	export let data;
	let form_update: HTMLFormElement[] = [];
	let form_remove: HTMLFormElement[] = [];

	let loading: boolean;
</script>

<div class="w-screen justify-items-center">
	<form
		action="/dashboard?/createTodo"
		method="POST"
		use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				await update();
				loading = false;
			};
		}}
		class="mb-4"
	>
		<input
			minlength="1"
			class="w-96 rounded-lg border border-gray-500 bg-gray-100/5 p-1 text-left text-sm text-black dark:border-gray-600 dark:bg-gray-700"
			type="text"
			name="todo"
		/>
		<button
			class="h-7 w-7 rounded border border-gray-500 bg-gray-100 dark:border-gray-600 dark:bg-gray-700"
			>{loading ? '+..' : '+'}</button
		>
	</form>

	{#each data.todos as todo, index}
		<div class="flex">
			<p class="mb-1 mr-1 rounded border border-gray-500 bg-gray-400/40 pl-1 pr-1">{todo.todo}</p>
			<form action="/dashboard?/update" bind:this={form_update[index]} method="POST" use:enhance>
				<input type="hidden" value={todo.id} name="id" />
				<input
					type="checkbox"
					class="h-4 w-4 rounded border-gray-500 bg-gray-100 checked:bg-red-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
					checked={todo.status}
					name="checked"
					on:change={(e) => e.currentTarget?.form.requestSubmit()}
				/>
			</form>
			<form
				action="/dashboard?/removeTodo"
				method="POST"
				use:enhance
				bind:this={form_remove[index]}
			>
				<input type="hidden" value={todo.id} name="id" />
				<button
					class="ml-2 h-5 w-5 rounded border border-gray-500 bg-gray-100 font-bold text-red-500 dark:border-gray-600 dark:bg-gray-700"
					>-</button
				>
			</form>
		</div>
	{/each}
</div>
