const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => console.log('MongoDB connection error!'))
db.once('open', () => console.log('MongoDB connected!'))

module.exports = db