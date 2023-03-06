<template>
  <div class="menu">
    <router-link class="link" to="/">
      <p class="item-menu">Home</p>
    </router-link>
    <router-link class="link" to="/about">
      <p class="item-menu">About Us</p>
    </router-link>
    <router-link class="link" to="/contact">
      <p class="item-menu">Contact</p>
    </router-link>
  </div>
</template>

<style>
    .menu {
        display: flex;
        justify-content: center;
    }

    .item-menu {
        margin: 10px;
        font-size: large;
        cursor: pointer;
        font-weight: 600;
    }

    .link {
        color: inherit;
        text-decoration: none;
    }
</style>
