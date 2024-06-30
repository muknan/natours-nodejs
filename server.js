const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

console.log(process.env);

// 4) START SERVER
const port = 3000;

app.listen(port, '127.0.0.1', () => {
  console.log(`Starting server on port ${port}... `);
});
