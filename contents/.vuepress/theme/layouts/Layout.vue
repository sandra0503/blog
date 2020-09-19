<template>
  <main class="p-container text-black">
    <AppNav />
    <div class="postLayout container mx-auto md:px-64 flex flex-col h-full">
      <div class="articleImage w-full mb-4">
        <img :src="this.$withBase(`${this.$page.frontmatter.thumbnail}`)" />
      </div>
      <div class="px-6 md:px-0">
        <div class="mb-4">
          {{ new Date(this.$page.frontmatter.date).toLocaleDateString("de-DE", {
          dateStyle: "medium",
          }) }}
        </div>
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

.postLayout {
  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .header-anchor {
    display: none;
  }

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    font-weight: 600;
  }
}
</style>
