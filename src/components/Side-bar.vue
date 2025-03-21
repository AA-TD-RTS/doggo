import { ref } from "vue"

<template>
  <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
  
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../../public/logo.png" alt="Vue">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>

    <h3>Menu</h3>

    <div class="menu">

      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      
      <router-link class="button" to="/about">
        <span class="material-icons">visibility</span>
        <span class="text">About</span>
      </router-link>

      <router-link class="button" to="/types">
        <span class="material-icons">pets</span>
        <span class="text">Hunderassen</span>
      </router-link>

    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

 const is_expanded = ref(localStorage.getItem("is_expanded") === "false")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", String(is_expanded.value))
}
</script>


<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
aside{
  display: flex;
  flex-direction: column;
  width: calc(2rem+2rem);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;


  
  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;  
  }
}


.menu-toggle-wrap{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-out;
}


.menu-toggle{
  transition: 0.2s ease-out; 
}


.logo{
  margin-bottom: 1rem; 
}


.is-expanded{
  width: var(--sidebar-width);
}


img{
  width: 2rem;
}

h3, .button, .text{
  opacity: 1;
  transition: 0.3s ease-in-out;
}

.button :hover{
    background-color: var(--dark-alt);
    color: var(--primary);
}

.menu{
  margin: 0 -1rem;
}


</style>