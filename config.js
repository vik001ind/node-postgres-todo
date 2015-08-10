var connectionString = process.env.DATABASE_URL || 'postgres://postgres:p0stgr3s@localhost:5432/todo';

module.exports = connectionString;
