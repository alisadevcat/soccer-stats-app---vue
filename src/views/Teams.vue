<template>
  <app-preloader v-if="isLoading" />
  <div
    v-if="!isLoading"
    class="container mx-auto max-w-screen-xl px-3 box-border"
  >
    <div class="text-center">
      <h1>Команды</h1>
    </div>
    <app-search
      :originalPosts="originalTeams"
      @handle-submit="handleSubmit"
     @handle-clear-input="handleClearInput"
    />

    <div
      class="grid xl:grid-cols-13 lg:grid-cols-13 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 gap-2 place-content-center" v-if="displayedPosts"
    >
      <div
        class="border rounded-sm border-black border-solid py-12 text-center"
        v-for="team in displayedPosts"
        :key="team.id"
      >
        <router-link
          :to="{
            name: 'team-calendar',
            params: { id: team.id, team_name: team.name },
          }"
          :key="team.id"
        >
          <div>
            <p class="pb-4" v-if="team.name">{{ team.name }}</p>
            <img
              v-if="team.crestUrl"
              :src="team.crestUrl"
              :alt="team.name"
              width="96"
              height="96"
              class="block mx-auto"
            />
          </div>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <p ref="not_found"></p>
    </div>

    <div class="mt-10 font-bold" v-if="errorMessage">
      <h2>{{ errorMessage }}</h2>
    </div>

    <div class="py-4">
      <VueTailwindPagination
        :current="currentPage"
        :total="total"
        :per-page="perPage"
        @page-changed="onPageClick($event)"
      />
    </div>
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
// const apiKey = process.env.DOTENV.API_KEY;
import AppSearch from "../components/Search.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import AppPreloader from "../components/Preloader.vue";

import axios from "axios";

export default {
  components: {
    AppSearch,
    VueTailwindPagination,
    AppPreloader,
  },
  data() {
    return {
      teams: [],
      perPage: 10,
      pages: [],
      searchString: "",
      currentPage: 1,
      pages: [],
      total: null,
      originalTeams: [],
      isLoading: false,
      errorMessage: "",
    };
  },
  methods: {
    paginate(teams) {
      let page = this.currentPage;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;

      return teams.slice(from, to);
    },
    onPageClick(event) {
      this.currentPage = event;
    },
    handleSubmit(obj) {
      let search_results = [];

      obj.result_posts.forEach((el, index, arr) => {
        search_results[index] = {
          id: arr[index][0],
          name: arr[index][2],
          crestUrl: arr[index][5],
        };
      });

      this.teams = search_results;
      this.total = this.teams.length;
      this.$refs.not_found.innerText = obj.no_results_text;
    },
    handleClearInput(obj) {
      this.teams = obj.result_posts;
      this.total = obj.result_posts.length;
      this.$refs.not_found.innerText = obj.no_results_text;
    },
  },
  computed: {
    key() {
      return apiKey;
    },
    displayedPosts() {
      return this.paginate(this.teams);
    },
    // teamsForSearch() {
    //   return this.teams.map(({ crestUrl, ...rest }) => rest);
    // },
  },
  mounted() {
    this.isLoading = true;
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/teams",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        let teams = response.data?.teams;
        this.teams = teams;
        this.originalTeams = teams;
        this.total = teams.length;
        console.log(
          this.teams.map((i) => {
            const { id, name, crestUrl } = i;
            i = { ...id, ...name, ...crestUrl };
          })
        );
      })
      .catch((err) => {
        if (err.response) {
          this.errorMessage =
            "Не удалось загрузить данные из-за ошибки доступа";
          // client received an error response (5xx, 4xx)
          console.log(err.response);
        } else if (err.request) {
          // client never received a response, or request never left
          this.errorMessage = "Ошибка сети";
          console.log(err.request);
        } else {
          console.log("app mistake");
          // anything else
        }
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
