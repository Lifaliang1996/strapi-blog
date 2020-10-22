module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        host: env('DATABASE_HOST', '47.113.81.85'),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'blog'),
        username: env('DATABASE_USERNAME', 'liang'),
        password: env('DATABASE_PASSWORD', '196420')
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE'),
        ssl: env('DATABASE_SSL')
      }
    }
  }
})
