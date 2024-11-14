<script lang="ts">
	import { enhance } from "$app/forms";
    export let data;
    // TODO: Make form update a array. give each block item a index. at 16 and 19 bind this to formupdate array with the index number
    let form_update: HTMLFormElement[];
</script>

<form action="/dashboard?/createTodo" method="POST" use:enhance>
    <input type="text" name="todo">
    <button>Send</button>
</form>

{#each data.todos as todo}
    <div class="flex">
        <p>{todo.todo}</p>
        <form action="/dashboard?/update" bind:this={form_update}>
            <input type="hidden" value="{todo.id}" name="id">
            <input type="checkbox" checked={todo.status} name="checked" on:change={()=> {
                form_update.submit();
            }}>
        </form>
    </div> 
{/each}