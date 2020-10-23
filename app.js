const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => console.log(`This app is listening at http://localhost:${PORT}`))