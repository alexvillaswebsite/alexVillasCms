module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', `${DO_SPACE_CDN}`],
          'media-src': ["'self'", 'data:', 'blob:', `${DO_SPACE_CDNL}`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
