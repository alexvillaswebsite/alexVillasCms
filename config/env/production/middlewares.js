module.exports = ({ env }) => [
  "strapi::errors",

  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ['self', 'http:', env("DO_SPACE_CDN")],
          'img-src': ['self', 'data:', 'blob:', , env("DO_SPACE_CDN"), 'https://admin.alex.villas/'],

        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
