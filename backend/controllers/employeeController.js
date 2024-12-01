const Employee = require('../models/employeeModel');

const addEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchEmployee = async (req, res) => {
    const { name } = req.query;
    try {
        const employees = await Employee.find({ name: { $regex: name, $options: 'i' } });
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    searchEmployee,
};
