const { Router } = require('express'),
      router = Router()

const { getAllDepartments, 
        createOneDepartment, 
        updateOneDepartment, 
        deleteOneDepartment, 
        getOneDepartment } = require('../controllers/departments')

router.get('/', getAllDepartments)
router.get('/:id', getOneDepartment)
router.post('/', createOneDepartment)
router.put('/:id', updateOneDepartment)
router.delete('/:id', deleteOneDepartment)

module.exports = router