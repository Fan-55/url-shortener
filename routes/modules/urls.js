const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.post('/', async (req, res, next) => {
  const baseUrl = process.env.BASE_URL || 'https://secret-oasis-08507.herokuapp.com/'
  const isValidUrl = require('../../utils/isValidUrl')
  const originalUrl = req.body.originalUrl

  //prevent invalid url input
  if (isValidUrl(originalUrl)) {
    try {
      const url = await Url.findOne(req.body).lean()

      if (url) {
        const pathname = url.pathname
        const shortenUrl = baseUrl + pathname
        res.render('index', { originalUrl, shortenUrl })
      } else {
        const getPathname = require('../../utils/getPathname')
        let pathname
        let duplicateUrl

        do {
          pathname = getPathname()
          duplicateUrl = await Url.findOne({ pathname }).lean()
        } while (duplicateUrl)

        Url.create({ originalUrl, pathname })
        const shortenUrl = baseUrl + pathname
        res.render('index', { originalUrl, shortenUrl })
      }

    } catch (err) {
      console.log(err)
    }
  } else {
    const err = new Error('Invalid url input')
    next(err)
  }
})

module.exports = router