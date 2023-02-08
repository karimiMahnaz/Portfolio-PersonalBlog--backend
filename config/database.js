module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapidata'),
      user: env('DATABASE_USERNAME', 'mah'),
      password: env('DATABASE_PASSWORD', '56k1-DD11!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
	useNullAsDefault: true,
  }
});
