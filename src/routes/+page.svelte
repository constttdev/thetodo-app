<script lang="ts">
    let todo_input: String;
</script>

<div>
    <input bind:value={todo_input} type="text">
    {#each todos as todo}
        <p>{todo}</p>
    {/each}
</div>