const { Router } = require('express'),
      router = Router()

const { getAllEmployees, 
        createOneEmployee, 
        updateOneEmployee, 
        deleteOneEmployee, 
        getOneEmployee } = require('../controllers/employees')

router.get('/', getAllEmployees)
router.get('/:id', getOneEmployee)
router.post('/', createOneEmployee)
router.put('/:id', updateOneEmployee)
router.delete('/:id', deleteOneEmployee)

module.exports = router