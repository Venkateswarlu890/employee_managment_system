const {createEmployee} = require('../controllers/employeeController')

const express = require('express')
const router = express.Router()

router.post('/add-employee', createEmployee)

module.exports = router
