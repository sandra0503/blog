<template>
  <div>
    <div class="articleImage relative w-full mb-4">
      <img :src="this.$withBase(`${image}`)" :alt="imageAlt" />
      <span
        class="absolute px-1 bottom-0 left-0 text-white text-sm md:text-tiny bg-black bg-opacity-25"
        >{{ imageSource }}</span
      >
    </div>
    <div class="w-full">
      <div class="flex flex-row items-center justify-between my-2">
        <span
          class="category p-2 bg-black text-white inline-block"
          v-if="categories[category]"
          >{{ categories[category] }}</span
        >
        <div class="text-right">
          <p>{{ source }}</p>
          <p>{{ formattedDate }}</p>
        </div>
      </div>
      <h2 class="center my-4" v-if="title" v-html="title"></h2>
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPortfolioItem",
  data() {
    return {
      categories: { audio: "Audio", video: "Video", article: "Print" },
    };
  },
  props: {
    title: String,
    description: String,
    date: String,
    category: String,
    source: String,
    image: String,
    imageSource: String,
    imageAlt: String,
  },
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString("de-DE", {
        dateStyle: "medium",
      });
    },
  },
};
</script>

<style scoped>
.app-article {
  cursor: pointer;
}

.articleImage img {
  width: 100%;
  height: 15rem;
  object-fit: cover;
}
</style>
