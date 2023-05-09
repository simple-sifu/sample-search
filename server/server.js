const express = require('express');
const cors = require('cors');

// Route files
const productRoutes = require('./routes/productRoutes');

// Load env vars
require('dotenv').config()

const app = express();
app.use(cors());

app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || 3090;

app.listen(
  PORT,
  // eslint-disable-next-line no-console
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
