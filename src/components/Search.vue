<template>
  <div class="flex justify-start">
    <div class="mb-3 xl:w-96">
      <div
        class="input-group relative flex flex-wrap items-stretch w-full mb-4"
      >
        <form role="search" @submit.prevent="searchSubmit">
          <div class="flex">
            <div class="relative w-full">
              <input
                type="search"
                name="search"
                v-model="searchString"
                @keyup="handleClearInput"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search..."
              />
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import IconSearch from "./icons/IconSearch.vue";

export default {
  props: {
    originalPosts: Array,
  },
  components: {
    IconSearch,
  },
  data() {
    return {
      searchString: "",
      search_posts: [],
      no_result_text: "",
    };
  },
  methods: {
    filterPosts(arr) {
      let strLowCase = this.searchString.toLowerCase();

      let result_array = this.createObjforFilter(arr);

      let results = result_array.filter((post) => {
        return post.toLowerCase().includes(strLowCase);
      });
      return this.splitArr(results);
    },
    createObjforFilter(arr) {
      let result_array = arr.map((item) => (item = Object.values(item)));

      result_array = result_array.map((item) => (item = String(item)));
      return result_array;
    },
    splitArr(arr) {
      return arr.map((element) => element.split(","));
    },
    searchSubmit() {
      let search_results = this.filterPosts(this.originalPosts);

      if (this.searchString) {
        this.search_posts = search_results;

        if (!this.search_posts.length) {
          this.no_result_text = "No posts found";
        }
        //console.log("+" + "" + this.no_result_text);
      } else {
        this.search_posts = this.splitArr(
          this.createObjforFilter(this.originalPosts)
        );
        this.no_result_text = "";
        //console.log("-" + "" + this.no_result_text);
      }

      const obj = {
        result_posts: this.search_posts,
        no_results_text: this.no_result_text,
      };

      this.$emit("handleSubmit", obj);

    },
    handleClearInput(event) {
      if (!event.target.value) {
        const obj = {
          result_posts: this.originalPosts,
          no_results_text: " ",
        };

        this.$emit("handleClearInput", obj);
      }
      this.searchString = event.target.value;
    },
  },
};

// let result_array = this.originalPosts.map( // (item) => (item =
//Object.values(item)) // ); // result_array = result_array.map((item) => (item =
//String(item))); // let results = result_array.filter((post) => { // return
//post.toLowerCase().includes(strLowCase); // }); // let search_results =
//results.map((element) => element.split(","));
// console.group("string");
// console.log(this.searchString);
// console.group("result_array");
// console.log(result_array);
// console.group("results");
// console.log(results);

</script>

