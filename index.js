// Import Modules
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors') //Enable cors request
const Sequelize = require('sequelize')

// Import routes
const route = require('./routes')
const menuRoutes = require('./routes/menuRoutes')
const submenuRoutes = require('./routes/submenuRoutes')

const Op  = Sequelize.Op

app.use(cors())
app.use((req, res, next) => {
    req.Op = Op
    next()
});

// Parsing the body of incoming requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Static files
app.use(express.static('public'))

// Connect the routes with
app.get('/', (req, res) => {
    res.send('Home page: menu app')
})
app.use('/menu', menuRoutes)
app.use('/submenu', submenuRoutes)


// Listen to port 3000 
app.listen(3000,()=> console.log("server running on http://localhost:3000")); 

module.exports = app