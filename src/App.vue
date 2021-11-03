<script setup>
// import { ref } from 'vue'
</script>

<template>
  <div>
    <div class="navbar shadow-lg bg-neutral text-neutral-content" v-if="$route.meta.title">
      <div class="px-2 mx-2 navbar-start">
        <span class="text-2xl font-bold">{{ $route.meta.title }}</span>
      </div>
      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">Home</router-link>
          <router-link to="Soojin" class="btn btn-ghost btn-sm rounded-btn">Soojin</router-link>
          <router-link to="Jiyoon" class="btn btn-ghost btn-sm rounded-btn">Jiyoon</router-link>
          <router-link to="Monday" class="btn btn-ghost btn-sm rounded-btn">Monday</router-link>
          <router-link to="Soeun" class="btn btn-ghost btn-sm rounded-btn">Soeun</router-link>
          <router-link to="Jaehee" class="btn btn-ghost btn-sm rounded-btn">Jaehee</router-link>
          <router-link to="Jihan" class="btn btn-ghost btn-sm rounded-btn">Jihan</router-link>
          <router-link to="Zoa" class="btn btn-ghost btn-sm rounded-btn">Zoa</router-link>
        </div>
      </div>
      <div class="navbar-end"></div>
      <div class="navbar-end flex-none lg:hidden">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style lang="scss">
.router-link-exact-active {
  color: #4e5eac;
}
</style>
