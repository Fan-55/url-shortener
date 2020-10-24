const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.post('/', async (req, res, next) => {
  const baseUrl = process.env.BASE_URL || 'https://secret-oasis-08507.herokuapp.com/'
  try {
    const url = await Url.findOne(req.body)

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
        duplicateUrl = await Url.findOne({ pathname })
      } while (duplicateUrl)

      Url.create({
        originalUrl: req.body.originalUrl,
        pathname: pathname
      })

      const shortenUrl = baseUrl + pathname
      res.render('index', { shortenUrl })
    }

  } catch (err) {
    console.log(err)
  }
})

module.exports = router