<template>
  <div>
    <div
      v-if="categories[category]"
      class="flex flex-row items-center justify-between -mb-6 z-100"
    >
      <span
        class="category p-4 text-sm bg-black text-white inline-block"
        v-if="categories[category]"
        >{{ categories[category] }}</span
      >
    </div>
    <div class="articleImage relative w-full mb-4">
      <img :src="this.$withBase(`${image}`)" :alt="imageAlt" />
      <span
        class="absolute px-1 bottom-0 left-0 text-white text-sm md:text-tiny bg-black bg-opacity-25"
        >{{ imageSource }}</span
      >
    </div>
    <div class="w-full">
      <h2 class="center my-4" v-if="title" v-html="title"></h2>
      <p v-html="description"></p>
      <p class="text-sm mt-2" v-if="source">Quelle: {{ source }}</p>
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
};
</script>

<style scoped>
.app-article {
  cursor: pointer;
}

.articleImage {
  z-index: -1;
}

.articleImage img {
  width: 100%;
  height: 15rem;
  object-fit: cover;
}
</style>
