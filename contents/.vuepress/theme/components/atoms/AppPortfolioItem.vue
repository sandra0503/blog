<template>
  <a
    :href="link"
    target="_blank"
    class="app-article flex flex-col flex-1 items-center self-center md:mx-8 my-8 md:my-6"
  >
    <div class="articleImage w-full mb-4">
      <img :src="this.$withBase(`${image}`)" />
    </div>
    <div>
      <div class="flex flex-row items-center justify-between my-2">
        <span
          class="category p-2 bg-black text-white inline-block"
          v-if="categories[category]"
        >{{ categories[category] }}</span>
        <div class="text-right">
          <p>{{ source }}</p>
          <p>{{ formattedDate }}</p>
        </div>
      </div>
      <h2 class="center my-4" v-if="title" v-html="title"></h2>
      <p v-html="description"></p>
    </div>
  </a>
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
    link: String,
    image: String,
    alignment: String,
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
