<template>
  <header class="bg-white">
    <nav
      class="font-serif text-center flex justify-between py-4 px-3 mx-auto container overflow-hidden"
    >
      <router-link
        :to="`/`"
        class="block text-xl text-left self-center no-underline"
        v-html="$site.title"
      ></router-link>
      <ul class="text-sm list-reset flex items-center">
        <li v-for="item in navItems">
          <a
            :href="item.link"
            ref="anchorLink"
            class="anchorLink cursor-pointer inline-block py-1 mt-1 ml-3 p-2 no-underline transition-fast"
            v-on:click="scrollToTarget"
          >{{item.text}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppNav",
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
  border-bottom: 1px solid white;
}

.anchorLink:hover {
  border-bottom: 1px solid black;
}
</style>
