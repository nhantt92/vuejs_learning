<!--
https://eugenkiss.github.io/7guis/tasks/#counter
-->

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  watch() {
    
  }
}
</script>

<template>
<button @click="count++">Count</button>
<p>{{  count }}</p> 
</template>