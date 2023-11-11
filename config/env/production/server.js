module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: env('PORT'),
  url: env('MY_HEROKU_URL'),
  app: { 
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  keys: env.array('APP_KEYS'), // Certifique-se de adicionar as chaves do aplicativo aqui também
  jwt: {
    secret: env('JWT_SECRET', '?efbrer3435wd201'),
  },
});
