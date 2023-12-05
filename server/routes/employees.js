const { Router } = require('express')
const { getAllEmployees, 
        createOneEmployee, 
        updateOneEmployee, 
        deleteOneEmployee, 
        getOneEmployee } = require('../controllers/employees')
        
const router = Router()

router.get('/', getAllEmployees)
router.get('/:id', getOneEmployee)
router.post('/', createOneEmployee)
router.put('/:id', updateOneEmployee)
router.delete('/:id', deleteOneEmployee)

module.exports = router