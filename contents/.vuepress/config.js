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
            text: "Portfolio",
            link: "#skills",
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
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  ],
};
