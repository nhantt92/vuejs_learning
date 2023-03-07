<template>
  <Cover>
    <Imposter>
      <div class="detail-404">
        <h2 class="detail-404-heading">404</h2>
        <router-link class="detail_btn" to="/">Back Home</router-link>
      </div>
    </Imposter>
  </Cover>
</template>

<script>
import Cover from "../layouts/Cover.vue";
import Imposter from "../layouts/Imposter.vue";

export default {
    name: '404',
    components: {
        Cover,
        Imposter
    }
}
</script>

<style>
</style>