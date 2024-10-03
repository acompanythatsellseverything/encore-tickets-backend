module.exports = ({ env }) => ({
  url: 'http://209.126.9.253/strapi',
  admin: {
    url: '/strapi',
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
