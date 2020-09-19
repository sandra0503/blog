<template>
  <main class="p-container text-black">
    <AppNav />
    <div class="container mx-auto md:px-64 flex flex-col h-full">
      <div class="articleImage w-full mb-4">
        <img :src="this.$withBase(`${this.$page.frontmatter.thumbnail}`)" />
      </div>
      <div class="px-6 md:px-0">
        <h1 v-html="title"></h1>
        <Content class="mx-auto" />
      </div>
      <Footer />
    </div>
  </main>
</template>

<script>
export default {
  name: "Layout",
  computed: {
    title() {
      return this.$page.title;
    },
  },
};
</script>

<style lang='stylus'>
@import '../styles/theme.styl';
</style>
