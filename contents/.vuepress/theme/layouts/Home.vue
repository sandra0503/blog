<template>
  <main class="p-container font-serif text-black">
    <AppNav />
    <div v-if="data.about" id="about" class="bg-white w-full">
      <div class="container flex flex-col md:flex-row mx-auto px-6 py-10 md:py-16">
        <div class="flex flex-1">
          <div class="self-center w-56 md:w-64 py-2 mx-auto">
            <img :src="$withBase(data.about.image.source)" :alt="data.about.image.alt" />
          </div>
        </div>
        <div class="flex-1 mt-3 md:mt-0">
          <h1 class="font-headline text-4xl">{{ data.about.headline }}</h1>
          <p class="mt-4" v-html="data.about.text"></p>
        </div>
      </div>
    </div>
    <div class="w-full" id="skills">
      <div class="container relative mx-auto px-6 py-10">
        <h1 class="font-headline text-center text-4xl mb-4">{{ data.experience.headline }}</h1>
        <div class="flex flex-col lg:flex-row">
          <template v-for="article in data.experience.articles">
            <AppArticle
              :title="article.title"
              :description="article.description"
              :year="article.year"
              :source="article.source"
              :link="article.link"
              :image="article.image"
            ></AppArticle>
          </template>
        </div>
      </div>
    </div>
    <div id="contact" class="bg-white w-full">
      <div class="container relative mx-auto px-6 md:w-1/2 py-10">
        <h1 class="font-headline text-4xl">{{ data.contact.headline }}</h1>
        <p class="mt-4 mb-12 mx-auto" v-html="data.contact.text"></p>
        <ContactForm class="md:mb-12" />
      </div>
    </div>
    <Content class="flex-1 max-w-xl mx-auto leading-normal" />
    <Footer class="pin-b" />
  </main>
</template>

<script>
import ContactForm from "@theme/components/ContactForm";
import Footer from "@theme/components/Footer";
import AppNav from "@theme/components/AppNav";
import AppArticle from "@theme/components/atoms/AppArticle";

export default {
  components: { AppNav, Footer, AppArticle, ContactForm },
  name: "Home",
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style lang='stylus'>
@import '../styles/theme.styl';
</style>
