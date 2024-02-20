<script lang="ts">
  import { siteConfig } from '$config/site';
  import AuthorAvatar from '$lib/components/image_avatar.svelte';
  import tippy from '$lib/actions/tippy';

  let className: string | undefined = undefined;
  export { className as class };
</script>

<section id="index-profile" class="h-card p-author rounded-2xl py10 px12 my4 {className ?? ''}">
  <a href={siteConfig.url} class="hidden u-url u-uid">{siteConfig.title}</a>
  {#if siteConfig.author.email}
    <p class="hidden u-email">
      {siteConfig.author.email}
    </p>
  {/if}

  <div class="relative group">
    <AuthorAvatar />
    <div
      id="status-tip"
      role="tooltip"
      use:tippy={{ placement: 'right', interactive: true, allowHTML: true }}
      data-tippy-content={siteConfig.author.statusTip}
      class="absolute rounded-full w-8 h-8 bottom-0 left-24 shadow-xl text-lg flex justify-center items-center animate-heart-beat">
      {siteConfig.author.status ?? ''}
    </div>
  </div>

  <h1 class="p-name text-2xl font-bold">{siteConfig.author.name}</h1>
  <p class="p-note text-base font-bold op75 bg-gradient-to-tr from-zinc-300 to-zinc-700 bg-clip-text text-transparent">
    {@html siteConfig.author.bio}
  </p>

  <div class="flex">
    {#if siteConfig.author.email}
      <a
        use:tippy
        href="mailto:{siteConfig.author.email}"
        rel="author external"
        class="btn btn-ghost"
        aria-label="Email">
        <div class="!w-[1.75rem] !h-[1.75rem] i-ic-baseline-mail" />
      </a>
    {/if}
    {#if siteConfig.author.github}
      <a
        use:tippy
        href={siteConfig.author.github}
        rel="author external"
        class="u-url u-uid btn btn-ghost"
        aria-label="Github">
        <div class="!w-[1.75rem] !h-[1.75rem] i-carbon-logo-github" />
      </a>
    {/if}
    {#if siteConfig.author.twitter}
      <a
        use:tippy
        href={siteConfig.author.twitter}
        rel="author external"
        class="u-url u-uid btn btn-ghost"
        aria-label="Twitter">
        <div class="!w-[1.75rem] !h-[1.75rem] i-carbon-logo-twitter" />
      </a>
    {/if}
    {#if siteConfig.author.bluesky}
      <a
        use:tippy
        href={siteConfig.author.bluesky}
        rel="author external"
        class="u-url u-uid btn btn-ghost"
        aria-label="bluesky">
        <svg class="w-8 h-8 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 568 501"><title>Bluesky butterfly logo</title><path fill="currentColor" d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"></path></svg>
      </a>
    {/if}    
  </div>
</section>

<style lang="scss">
  #index-profile {
    background-color: var(--qwer-bg-color);
    color: var(--qwer-text-color);
  }
  #status-tip {
    background-color: var(--qwer-bg-color);
  }

  .animate-heart-beat {
    animation: heartbeat 2s ease-in-out 2s infinite;
  }
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }

    2% {
      transform: scale(1);
    }

    4% {
      transform: scale(1.1);
    }

    8% {
      transform: scale(1.12);
    }

    20% {
      transform: scale(0.94);
    }

    24% {
      transform: scale(1.12);
    }

    32% {
      transform: scale(1.1);
    }

    40% {
      transform: scale(1);
    }
  }
</style>
