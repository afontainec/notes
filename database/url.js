// config/database.js
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/template';

module.exports = connectionString;
