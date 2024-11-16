<script lang="ts">
	import { enhance } from "$app/forms";
    export let data;
    let form_update: HTMLFormElement[] = [];
</script>

<div class="w-screen justify-items-center">
    <form action="/dashboard?/createTodo" method="POST" use:enhance class="mb-4">
        <input class="border rounded-lg border-gray-500 bg-gray-100/5 p-1 text-left text-sm text-black dark:border-gray-600 dark:bg-gray-700 w-96" type="text" name="todo">
        <button class="w-7 h-7 bg-gray-100 border-gray-500 rounded dark:bg-gray-700 dark:border-gray-600 border">+</button>
    </form>
    
    {#each data.todos as todo, index}
    <div class="flex">
        <p class="bg-gray-400/40 rounded border border-gray-500 pr-1 pl-1 mb-1 mr-1">{todo.todo}</p>
        <form action="/dashboard?/update" bind:this={form_update[index]} method="POST" use:enhance>
            <input type="hidden" value="{todo.id}" name="id">
            <input type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-500 checked:bg-red-500 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={todo.status} name="checked" on:change={e=>e.currentTarget?.form.requestSubmit()}>
        </form>
    </div> 
    {/each}
</div>