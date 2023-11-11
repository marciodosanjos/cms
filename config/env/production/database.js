// path: ./config/env/production/database.js

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'mysql',
          host: env('DATABASE_HOST', '108.179.253.20'),
          port: env.int('DATABASE_PORT', 3306),
          database: env('DATABASE_NAME', 'onarra45_strapi'),
          username: env('DATABASE_USERNAME', 'onarra45_strapi'),
          password: env('DATABASE_PASSWORD', 'M7902@312a'),
          ssl: env.bool('DATABASE_SSL', false),
        },
        options: {}
      },
    },
  });
  