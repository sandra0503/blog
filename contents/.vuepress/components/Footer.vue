<template>
  <footer class="font-serif text-center pt-8 pb-4 px-4">
    <div class="mt-4 mb-2">{{ data.footer }}</div>
    <router-link
      to="/impressum"
      class="text-sm mb-4 link no-underline"
    >
      Impressum
    </router-link>
  </footer>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>
<style scoped>
.link:hover {
border-bottom: 0.1rem solid black;
}
</style>
