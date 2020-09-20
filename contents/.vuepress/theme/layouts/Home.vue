<template>
  <main class="p-container text-black">
    <AppNav class="mt-8" showNavItems />
    <div v-if="data.about" class="bg-white w-full">
      <div
        class="container flex flex-col md:mt-8 md:flex-row mx-auto pt-4 md:pt-6 px-6 py-10 md:py-16"
      >
        <div class="flex flex-1">
          <div class="self-center w-56 md:w-64 py-2 mx-auto">
            <img :src="$withBase(aboutMe.frontmatter.image)" :alt="data.about.image.alt" />
          </div>
        </div>
        <div class="flex-1 mt-3 md:mt-0" id="about">
          <h1 class="font-headline">{{ aboutMe.frontmatter.headline }}</h1>
          <p class="mt-4" v-html="aboutMe.frontmatter.description"></p>
        </div>
      </div>
    </div>
    <div class="w-full" v-if="blogItems.length > 0">
      <div class="container relative mx-auto px-6 pt-6">
        <h1 class="font-headline md:text-center">Blog</h1>
        <div class="flex flex-col flex-wrap lg:flex-row">
          <div v-for="item in blogItems" class="lg:w-1/3">
            <router-link
              :to="item.path"
              class="app-article flex flex-col flex-1 items-center self-center md:mx-8 my-8 md:my-6"
            >
              <AppPortfolioItem
                :title="item.frontmatter.title"
                :description="item.frontmatter.description"
                :date="item.frontmatter.date"
                :category="item.frontmatter.category"
                :source="item.frontmatter.source"
                :link="item.frontmatter.link"
                :image="item.frontmatter.thumbnail"
                :imageSource="item.frontmatter.imageSource"
                :imageAlt="item.frontmatter.imageAlt"
              ></AppPortfolioItem>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full" id="skills" v-if="portfolio.length > 0">
      <div class="container relative mx-auto px-6 pt-6">
        <h1 class="font-headline md:text-center">{{ data.experience.headline }}</h1>
        <div class="flex flex-col flex-wrap lg:flex-row">
          <div v-for="item in portfolio" class="lg:w-1/3">
            <a
              :href="item.frontmatter.link"
              target="_blank"
              class="app-article flex flex-col flex-1 items-center self-center md:mx-8 my-8 md:my-6"
            >
              <AppPortfolioItem
                :title="item.frontmatter.title"
                :description="item.frontmatter.description"
                :date="item.frontmatter.date"
                :category="item.frontmatter.category"
                :source="item.frontmatter.source"
                :image="item.frontmatter.thumbnail"
                :imageSource="item.frontmatter.imageSource"
                :imageAlt="item.frontmatter.imageAlt"
              ></AppPortfolioItem>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="contact" class="container mx-auto relative px-6 py-10 bg-white w-full md:mt-8">
      <div class="lg:w-1/3 md:px-8 mx-auto">
        <h1 class="font-headline md:text-center">{{ data.contact.headline }}</h1>
        <p class="mt-4 mb-12 mx-auto">{{ data.contact.text }}</p>
        <ContactForm class="md:mb-12" />
      </div>
    </div>
    <Content class="flex-1 max-w-xl mx-auto leading-normal" />
    <Footer class="pin-b" />
  </main>
</template>

<script>
export default {
  name: "Home",
  computed: {
    data() {
      return this.$page.frontmatter;
    },

    aboutMe() {
      return this.$site.pages.find(
        (page) =>
          page.path.startsWith("/about/") && !page.frontmatter.blog_index
      );
    },

    portfolio() {
      return this.$site.pages
        .filter(
          (page) =>
            page.path.startsWith("/portfolio/") && !page.frontmatter.blog_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },

    blogItems() {
      return this.$site.pages
        .filter(
          (page) =>
            page.path.startsWith("/blog/") && !page.frontmatter.blog_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>
