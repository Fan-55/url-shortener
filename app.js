const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`This app is listening at http://localhost:${PORT}`))