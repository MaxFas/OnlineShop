const express = require('express')
const router = express.Router()
const productController = require('../controllers/typeController')

router.post('/', productController.create)
router.get('/', productController.getAll)

module.exports = router