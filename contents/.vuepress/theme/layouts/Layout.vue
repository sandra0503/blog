<template>
  <main class="p-container text-black">
    <AppNav class="mt-8"/>
    <div class="postLayout container mx-auto md:px-64 flex flex-col h-full pt-4 md:mt-8">
      <div class="px-6 md:px-0">
        <div class="mb-4 text-right" v-if="this.$page.frontmatter.date">
          {{ new Date(this.$page.frontmatter.date).toLocaleDateString("de-DE", {
          dateStyle: "medium",
          }) }}
        </div>
        <h1>{{ this.$page.title }}</h1>
        <p v-if="this.$page.frontmatter.description">{{ this.$page.frontmatter.description }}</p>
      </div>
      <div class="articleImage w-full mb-4" v-if="this.$page.frontmatter.thumbnail">
        <img :src="this.$withBase(`${this.$page.frontmatter.thumbnail}`)" />
      </div>
      <div class="px-6 md:px-0">
        <Content class="mx-auto" />
      </div>
      <Footer />
    </div>
  </main>
</template>

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
