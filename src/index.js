const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { engine } = require('express-handlebars')
const routes = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})