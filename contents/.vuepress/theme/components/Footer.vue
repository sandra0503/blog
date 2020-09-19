<template>
  <footer class="font-serif text-lg text-center pt-8 pb-4 px-4">
    <div class="mt-4 mb-8">{{ data.footer }}</div>
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
