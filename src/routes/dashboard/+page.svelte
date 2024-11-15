<script lang="ts">
	import { enhance } from "$app/forms";
    export let data;
    let form_update: HTMLFormElement[];
    function submitForm(index: number) {
        if(form_update[index]) {
            form_update[index].submit();
        }
    }
</script>

<form action="/dashboard?/createTodo" method="POST" use:enhance>
    <input type="text" name="todo">
    <button>Send</button>
</form>

{#each data.todos as todo, index}
    <div class="flex">
        <p>{todo.todo}</p>
        <form action="/dashboard?/update" bind:this={form_update[index]}>
            <input type="hidden" value="{todo.id}" name="id">
            <input type="checkbox" checked={todo.status} name="checked" on:change={()=> {
                submitForm(index);
            }}>
            <p>id: {todo.id}</p>
            <p>status: {todo.status}</p>
        </form>
    </div> 
{/each}