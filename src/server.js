const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const roleRouter = require('./routes/role.routes');

require('dotenv').config();

const app = express();

//connect mongoose
mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// json
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(
  express.urlencoded({
    extended: false,
  })
);

//routes
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/role', roleRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})


