<script>
    import { onMount } from 'svelte';

    let darkModeState = false;

    function toggleDarkmode() {
        darkModeState = !darkModeState;
        const darkMode = document.cookie.includes('darkmode=true');
        document.cookie = `darkmode=${!darkMode};path=/`;
        if (darkMode) document.body.classList.remove('dark');
        if (!darkMode) document.body.classList.add('dark');
    }

    onMount(() => {
        darkModeState = document.cookie.includes('darkmode=true');
    });
</script>

<label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer hidden" on:click={toggleDarkmode} checked={darkModeState}>
    <div class="peer-checked:border-red-500 focus:outline-none focus:ring-0 relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-300"></div>
</label>
  
