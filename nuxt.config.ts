// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "CompeteX",
      bodyAttrs: {
        class: "bg-light",
      },
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/icon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/icon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/icon/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/icon/site.webmanifest",
        },
      ],
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Find Your Next Challenge: Explore Online Competitions From Popular Platforms",
        },
        {
          key: "og:title",
          property: "og:title",
          content: "CompeteX",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            "Find Your Next Challenge: Explore Online Competitions From Popular Platforms",
        },
        {
          key: "og:image",
          property: "og:image",
          content: "/icon/android-chrome-512x512.png",
        },
        {
          key: "og:url",
          property: "og:url",
          content: "https://competex.vercel.app/",
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: "CompeteX",
        },
        {
          key: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          key: "author",
          name: "author",
          content: "Andrien Wiandyano",
        },
        {
          key: "keywords",
          name: "keywords",
          content:
            "Competitive Programming, Online Competition, Programming, Coding, CompeteX, List, List of Competitive Programming, Powered by KONTESTS",
        },
      ],
    },
  },
})
