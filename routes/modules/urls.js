const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.post('/', async (req, res, next) => {
  const baseUrl = process.env.BASE_URL || 'https://secret-oasis-08507.herokuapp.com/'
  const originalUrl = req.body.originalUrl.trim()
  //Error is thrown if url input (originalUrl) is empty or only contains spaces
  if (originalUrl) {
    try {
      const url = await Url.findOne(req.body).lean()

      if (url) {
        const pathname = url.pathname
        const shortenUrl = baseUrl + pathname
        res.render('index', { shortenUrl })
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
        res.render('index', { shortenUrl })
      }

    } catch (err) {
      console.log(err)
    }
  } else {
    const err = new Error('Invalid input')
    next(err)
  }
})

module.exports = router