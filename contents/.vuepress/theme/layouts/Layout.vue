<template>
  <div class="flex flex-col h-full">
    <AppNav />
    <Content class="flex-1 max-w-xl mx-auto leading-normal" />
    <Footer class="pin-b" />
  </div>
</template>

<script>
import Footer from "@theme/components/Footer";
import AppNav from "@theme/components/AppNav";

export default {
  components: { AppNav, Footer },
  name: "Layout",
};
</script>

<style lang='stylus'>
@import '../styles/theme.styl';
</style>
