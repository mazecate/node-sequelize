const express = require('express');
const {sequelize, testConnection} = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);


testConnection();


sequelize.sync({ force: false }).then(() => {
  console.log('Database connected!');
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}).catch((error) => {
  console.error('Error connecting to database:', error);
});
