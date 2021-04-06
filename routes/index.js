const express = require('express');
const app = express()

const menuRoutes = require('./menuRoutes')
const submenuRoutes = require('./submenuRoutes')


app.get('/', (req, res) => {
    res.send('Hello Express!')
})

module.exports = { menuRoutes, submenuRoutes};