//initialize express and template engine handlebars
const express = require('express')
const hbs = require('express-handlebars');
const path = require('path')
const {PORT} = require('./config')
require('./db')


const app = express()

//set handlebars as the main view engine
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');


//set the path to the assets directory
app.use(express.static(path.join(__dirname, "assets")));



//render the view on the home route
app.get('/', (req, res) => res.render('home'))
// console.log(config);

app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`))