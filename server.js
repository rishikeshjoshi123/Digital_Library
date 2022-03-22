if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const { param } = require('./routes/index');


const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('open', () => { console.log('Connected to database') });
db.on('error', (err) => console.log(err.message));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));


// routing handling
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Application started successfully , yipee ');

})