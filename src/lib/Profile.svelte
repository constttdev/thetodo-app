<script lang="ts">
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";
    import { Avatar, DropdownMenu } from "bits-ui";
    import darkModeState from "$lib/ToggleDarkMode.svelte"; 
  </script>
   
  <DropdownMenu.Root>
    <DropdownMenu.Trigger
      class="focus-visible inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-input bg-zinc-900 text-sm font-medium text-foreground shadow-btn hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-zinc active:scale-98">
    {#if $page.data.user}
        {#if $page.data.user.avatar}
          <img src="https://thetodo.pockethost.io/api/files/users/{$page.data.user.id}/{$page.data.user.avatar}" alt="avatar" class="avatar size-10 rounded-full">
        {:else}
          <img src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed={$page.data.user.username}" alt="avatar" class="avatar size-10 rounded-full">
        {/if}
    {:else}
      <img src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=THETODOAPP" alt="avatar" class="avatar size-10 rounded-full">
    {/if}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      class="w-full max-w-[229px] rounded-xl border border-zinc-800 bg-zinc-900 px-1 py-1.5 shadow-popover"
      sideOffset={8}>
      {#if darkModeState}
        <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-button py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-zinc-800 text-white">
          <a href="/settings" class="w-full">
          Settings
          </a>
        </DropdownMenu.Item>
      {:else}
        <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-button py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-zinc-800">
          <a href="/settings" class="w-full">
          Settings
          </a>
        </DropdownMenu.Item>
      {/if}
      {#if $page.data.user}
        {#if darkModeState}
          <DropdownMenu.Item
            class="flex h-10 select-none items-center rounded-button py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-zinc-800 text-red-500"> 
            <form action="/dashboard?/logout" method="POST" use:enhance class="w-full">
              <button class="w-full text-left">Logout</button>
            </form>
          </DropdownMenu.Item>
        {:else}
          <DropdownMenu.Item
            class="flex h-10 select-none items-center rounded-button py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-zinc-800 text-orange-400">
            <form action="/dashboard?/logout" method="POST" use:enhance class="w-full">
              <button class="w-full text-left">Logout</button>
            </form>
          </DropdownMenu.Item>
        {/if}
      {/if}

    </DropdownMenu.Content>
  </DropdownMenu.Root>