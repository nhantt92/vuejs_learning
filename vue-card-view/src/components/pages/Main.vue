<template>
  <main class="main">
    <Cover>
      <div class="textfield">
        <label class="textfield_label" for="search">
          <p class="hidden-text" id="search_text">Input from to search for project</p>
          <input
            id="search"
            aria-describedby="search_text"
            class="textfield_input"
            type="text"
            placeholder="Search Words..."
            v-model="filterKey"
          />
        </label>
      </div>
      <div class="container" v-show="lists.length !== 0">
        <Grid>
          <div class="card" v-for="list in lists" :key="list.id">
            <!-- <img :src="list.image" :alt="list.title" /> -->
            <router-link :to="{ name: 'Works', params: { number: list.id }}" :class="'card_img' + list.id + ' card_img'">
              <img :src="list.image" :alt="list.title" />
            </router-link>
            <div class="card_detail">
              <router-link :to="{}" class="filetype">{{ list.type }} </router-link>
            </div>
          </div>
        </Grid>
      </div>
      <h2 class="no-result" v-show="lists.length === 0">
        <span>No results.</span>
        <span>__</span>
      </h2>
    </Cover>
    <p class="logo">
      <router-link to="/profile" class="logo-link">
        <img src="/nhantt_logo_icon.png" alt="profile Detail" />
      </router-link>
    </p>
  </main>
</template>

<script>
import Cover from "../layouts/Cover.vue";
import Grid from "../layouts/Grid.vue";
import listData from "../../assets/data/list.json";
export default {
  name: "Main",
  components: {
    Cover,
    Grid,
  },
  data() {
    return {
      filterKey: "",
      filterItems: {},
      lists: listData,
    };
  },
  computed: {
    filterItems() {
      return this.lists.filter((list) => {});
    },
  },
  methods: {},
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 5px;
  right: 2.5%;
  display: block;
  z-index: 10;
  width: 200px;
  height: 50px;
  margin: 0;
}
.logo img {
  width: 100%;
  height: auto;
}
.logo a {
  transition: opacity 0.25s ease-in;
}
.logo a:hover img {
  opacity: 0.75;
}
.about:hover {
  text-decoration: none;
}
.main {
  background-color: #f0f0f0;
}
.container {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
.card {
  background: #456a8e;
  border-radius: 3px;
  transition: all 0.25s ease-in-out;
}
.card:hover {
  background: #384f66;
}
.card_img {
  display: block;
  transition: all 0.25s ease-in;
  opacity: 1;
}
.card_img:hover {
  opacity: 0.75;
}
.card_img img {
  width: 100%;
  height: auto;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.card_detail {
  padding: 6px 10px;
}
.filetype {
  color: #f0f0f0;
  font-size: 14px;
  font-weight: 500;
  display: block;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.textfield {
  background-color: #f0f0f0;
  margin: 0 auto 30px;
  width: 60%;
  max-width: 320px;
  display: flex;
  padding-top: 30px;
}
.textfield_label {
  width: 100%;
}
.textfield_input {
  appearance: none;
  background: transparent;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
}
.textfield_input:focus {
  outline: 0;
}
.no-result {
  text-align: center;
  font-size: 10.5vw;
  letter-spacing: 0.075em;
  font-weight: 700;
}
.no-result span {
  display: block;
}
.hidden-text {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
</style>