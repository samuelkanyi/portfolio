//initialize express and template engine handlebars
const express = require('express')
const hbs = require('express-handlebars');
const path = require('path')

const app = express()

//set handlebars as the main view engine
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');


//set the path to the assets directory
app.use(express.static(path.join(__dirname, "assets")));


const port = 3000

//render the view on the home route
app.get('/', (req, res) => res.render('home'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))