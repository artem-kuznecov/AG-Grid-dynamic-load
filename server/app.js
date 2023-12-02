require('dotenv').config()

const bodyParser = require("body-parser")

const express = require('express'),
      path = require('path'),
    //   { Sequelize } = require('sequelize'),
      departmentsRouter = require('./routes/departments.js'),
      employeesRouter = require('./routes/employees.js'),
      exphbs = require('express-handlebars') // ! FIXME DELETE

const PORT = process.env.PORT || 3000
const app = express()


app.use(bodyParser.json())

// ~
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
// ~

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/departments', departmentsRouter)
app.use('/api/employees', employeesRouter)

async function start() {
    try {
        app.listen(PORT, () => console.log('started'))
    } catch (e) {
        console.log(e) 
    }
}

start()

