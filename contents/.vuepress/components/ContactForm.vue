<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <div class="form-input items-center">
      <label class="input-label md:max-w-32" for="name">{{
        data.contact.nameLabel
      }}</label>
      <input type="text" id="name" class="input-field" />
    </div>
    <div class="form-input items-center">
      <label class="input-label md:max-w-32" for="email">{{
        data.contact.emailLabel
      }}</label>
      <input type="email" id="email" class="input-field" />
    </div>
    <div class="form-input">
      <label class="input-label md:max-w-32" for="message">{{
        data.contact.messageLabel
      }}</label>
      <textarea id="message" class="input-field h-32 resize-none"></textarea>
    </div>
    <div class="text-center">
      <button class="mt-8 btn-secondary w-32" type="submit">
        {{ data.contact.buttonLabel }}
      </button>
    </div>
  </form>
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
