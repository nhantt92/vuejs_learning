<template>
  <div class="my-3 mx-3">
    <div
      class="card smcard"
      :class="{
        'pcard-dark': nightMode,
        pcard: !nightMode,
        'bg-dark3': nightMode,
      }"
    ></div>
  </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        portfolio: {
            type: Object,
        },
        nightMode: {
            type: Boolean,
        }
    },
    methods: {
        open(url) {
            window.open(url, "_blank");
        },
        showModal() {
            this.$emit("show", this.portfolio);
        }
    }
}
</script>
