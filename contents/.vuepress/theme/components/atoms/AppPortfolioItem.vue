<template>
  <a
    :href="link"
    target="_blank"
    class="app-article flex flex-col flex-1 items-center self-center md:mx-8 my-8 md:my-6"
  >
    <div class="articleImage w-full">
      <img :src="this.$withBase(`${image}`)" />
    </div>
    <div>
      <div class="flex flex-row justify-between">
        <p>{{formattedDate}}</p>
        <p>{{ source }}</p>
      </div>
      <h2 class="font-serif font-extrabold text-xl center my-4" v-if="title" v-html="title"></h2>
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
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleString("de-DE", {
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
