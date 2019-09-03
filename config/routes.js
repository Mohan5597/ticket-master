const express = require('express')
const router = express.Router()

const customerController=require('../app/controllers/customerController')
const departmentController=require('../app/controllers/departmentController')
const employeeController=require('../app/controllers/employeeController')
const ticketController=require('../app/controllers/ticketController')



router.get('/customers', customerController.list)
router.get('/customers/:id',customerController.show)
router.post('/customers',customerController.create)
router.put('/customers/:id', customerController.update)
router.delete('/customers/:id', customerController.destroy)

router.get('/departments', departmentController.list)
router.get('/departments/:id',departmentController.show)
router.post('/departments',departmentController.create)
router.put('/departments/:id', departmentController.update)
router.delete('/departments/:id', departmentController.destroy)

router.get('/employees', employeeController.list)
router.get('/employees/:id',employeeController.show)
router.post('/employees',employeeController.create)
router.put('/employees/:id', employeeController.update)
router.delete('/employees/:id', employeeController.destroy)

router.get('/tickets', ticketController.list)
router.get('/tickets/:id',ticketController.show)
router.post('/tickets',ticketController.create)
router.put('/tickets/:id', ticketController.update)
router.delete('/tickets/:id', ticketController.destroy)





module.exports=router