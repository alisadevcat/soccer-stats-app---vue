<template>
  <div class="container">
    <h1>Лиги</h1>
    <app-search
      :posts="posts"
      :originalPosts="originalposts"
      @handle-submit="handleSubmit"
      @handle-input="handleInput"
    />
    <div class="league-cards">
      <div class="card" v-for="item in displayedPosts" :key="item.id">
        <router-link
          :to="{ name: 'competition-calendar', params: { id: item.id } }"
        >
          <div class="card-content">
            <p class="card-title">League: {{ item.name }}</p>
            <p class="card-subtitle">Country: {{ item.area }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <p ref="not_found"></p>
    </div>

    <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="onPageClick($event)"
    />
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
const apiKey = process.env.VUE_APP_API_KEY;
import AppSearch from "../components/Search.vue";

import axios from "axios";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  components: {
    AppSearch,
    VueTailwindPagination,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      perPage: 9,
      pages: [],
      originalposts: [],
      total: null
    };
  },
  methods: {
    paginate(posts) {
      let page = this.currentPage;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;

      return posts.slice(from, to);
    },
    handleSubmit(obj) {
      this.posts = obj.result_posts;
      if (obj.no_results_text) {
        this.$refs.not_found.innerText = obj.no_results_text;
      }
    },
    // handleInput(obj) {
    //   this.posts = obj.result_posts;
    // },
    onPageClick(event) {
      this.currentPage = event;
    },
  },
  computed: {
    key() {
      return apiKey;
    },
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  mounted() {
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/competitions",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    }).then((response) => {
      let competitions = response.data.competitions.map(
        (item) =>
          (item = { id: item.id, name: item.name, area: item.area.name })
      );
      this.posts = competitions;
      this.originalposts = competitions;
      this.total = competitions.length;
    });
  },
};
</script>

<style>
.pagination {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
  padding: 3px;
}
.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>

<!-- <div class="pagination row">
      <ul class="pagination-list">
        <span class="pagination-button">
          <button type="button" v-if="page != 1" @click="page--">
            Previous
          </button>
        </span>
        <button
          type="button"
          v-for="pageNumber in pages.slice(page - 1, page + 9)"
          :key="pageNumber"
          @click="page = pageNumber"
        >
          {{ pageNumber }}
        </button>

        <span class="pagination-button">
          <button type="button" @click="page++" v-if="page < pages.length">
            Next
          </button>
        </span>
      </ul>
    </div> -->

<!-- <form
      role="search"
      class="site-search site-nav__search"
      @submit.prevent="onFormSubmit"
    >
      <input
        type="search"
        name="search"
        :value="searchString"
        @input="handleInput"
        class="site-search__input js-search-field"
        placeholder="Search?"
      />
      <button class="site-search__btn" type="submit">
        <span class="u-visually-hidden">
          <img src="../../src/assets/images/search.svg" />
        </span>
      </button>
    </form> -->