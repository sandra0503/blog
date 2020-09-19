<template>
  <a
    :href="link"
    target="_blank"
    class="app-article flex flex-row flex-1 items-center self-center md:mx-8 my-8 md:my-6"
  >
    <div class="articleImage w-articleImageWidth rounded-full mr-8">
      <img :src="this.$withBase(`${image}`)" />
    </div>
    <div>
      <p>Medium: {{ source }}</p>
      <h2 class="font-serif font-bold text-xl center my-4" v-if="title" v-html="title"></h2>
      <p class="text-base" v-html="description"></p>
    </div>
  </a>
</template>

<script>
export default {
  name: "AppPortfolioItem",
  props: {
    title: String,
    description: String,
    date: String,
    category: String,
    source: String,
    link: String,
    image: String,
    alignment: String,
  },
};
</script>

<style scoped>
.app-article {
  cursor: pointer;
}
</style>
