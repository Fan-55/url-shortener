const db = require('../../config/mongoose')
const Url = require('../url')
const urls = require('../seeds/data/urls.json').urls

db.once('open', () => {
  Url.insertMany(urls)
    .then(results => {
      console.log('url seeds created!')
      db.close()
    })
    .catch(err => console.log(err))
})