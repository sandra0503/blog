module.exports = {
  title: "Sabina Zollner",
  description: "Sabina Zollner",
  themeConfig: {
    docsDir: "docs",
    locales: {
      "/": {
        selectText: "Language",
        label: "Deutsch",
        nav: [
          {
            text: "Über mich",
            link: "#about",
          },
          {
            text: "Kontakt",
            link: "#contact",
          },
        ],
      },
    },
  },
  plugins: {
    "vuepress-plugin-smooth-scroll": true,
    smoothscroll: true,
  },
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
  head: [
    [
      "script",
      {
        src:
          "https://unpkg.com/smoothscroll-polyfill@0.4.3/dist/smoothscroll.min.js",
      },
    ],
  ],
};
