<template>
<div :class="!$store.state.topMenu ? 'hidden' : ''">


 <nuxt-link
      :to="localePath('/new/group')"
      class="bg-theme_primary_dark text-primary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 "
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-plus-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
        />
        <path
          fill-rule="evenodd"
          d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
        />
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
      </svg>
      <span class="hidden lg:block text-xs px-2"> {{ name }}</span>
    </nuxt-link>
</div>
</template>

<script>
export default {
  props: ['link','name']
}
</script>
