<template>
  <header class="bg-white">
    <nav
      class="font-sans text-center flex flex-col justify-between py-4 px-3 mx-auto container overflow-hidden"
    >
      <router-link
        :to="`/`"
        class="font-serif block font-semibold text-2xl text-left self-center no-underline"
      >
        <h1>{{ $site.title }}</h1>
      </router-link>
      <ul
        class="list-reset mt-2 w-4/5 md:w-1/2 lg:w-1/4 self-center flex items-center"
        v-if="showNavItems"
      >
        <li v-for="item in navItems" class="w-1/3">
          <a
            :href="item.link"
            ref="anchorLink"
            class="anchorLink cursor-pointer py-1 mt-1 no-underline transition-fast"
            v-on:click="scrollToTarget"
          >{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppNav",
  props: {
    showNavItems: Boolean,
  },
  computed: {
    navItems() {
      const base = this.$site.base;
      return this.$site.themeConfig.locales[base].nav;
    },
  },
  methods: {
    scrollToTarget(event) {
      event.preventDefault();
      const anchor = document.querySelectorAll(
        event.target.getAttribute("href")
      )[0];
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  beforeDestroyed() {
    this.anchorLinks.forEach((link) => {
      link.removeEventListener("click", this.scrollToTarget);
    });
  },
};
</script>

<style scoped>
.anchorLink {
  border-bottom: 0.1rem solid white;
}

.anchorLink:hover {
  border-bottom: 0.1rem solid black;
}
</style>
