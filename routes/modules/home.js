const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/:pathname', async (req, res, next) => {
  try {
    const pathname = req.params.pathname
    const url = await Url.findOne({ pathname }).lean()

    if (url) {
      res.redirect(url.originalUrl)
    } else {
      const err = new Error('No original url')
      next(err)
    }

  } catch (err) {
    console.log(err)
    next(err)
  }
})

module.exports = router