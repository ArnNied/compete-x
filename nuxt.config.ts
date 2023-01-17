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
          hid: "description",
          name: "description",
          content:
            "Find Your Next Challenge: Explore Online Competitions From Popular Platforms",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "CompeteX",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Find Your Next Challenge: Explore Online Competitions From Popular Platforms",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/icon/android-chrome-512x512.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://competex.vercel.app/",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "CompeteX",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
      ],
    },
  },
})
