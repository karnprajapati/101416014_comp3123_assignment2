const express = require('express');
const {
    addEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    searchEmployee,
} = require('../controllers/employeeController');
const router = express.Router();

router.post('/', addEmployee);
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.get('/search', searchEmployee);

module.exports = router;
