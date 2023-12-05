require('dotenv').config()

const bodyParser = require('body-parser')

const express = require('express'),
      path = require('path'),
      departmentsRouter = require('./routes/departments.js'),
      employeesRouter = require('./routes/employees.js')

const PORT = process.env.PORT || 8000
const app = express()

app.use(bodyParser.json())

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

