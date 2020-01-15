//initialize express and template engine handlebars
const express = require('express')
const hbs = require('express-handlebars');
const path = require('path')
const {PORT} = require('./lib/config')
require('./lib/db')


const app = express()

//set handlebars as the main view engine
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');


//set the path to the assets directory
app.use(express.static(path.join(__dirname, "assets")));



const routes = require('./lib/routes')
app.use('/', routes)

app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`))