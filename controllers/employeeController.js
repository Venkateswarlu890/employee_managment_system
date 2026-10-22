const EmployeeModel = require('../models/Employee')

const createEmployee = async (request, response) => {
  try {
    const {name, email, department, salary, experience} = request.body
    if (salary < 20000) {
      return res.status(400).json({message: 'Salary must be at least 20000'})
    }

    // Validate department
    const validDepartments = ['IT', 'HR', 'Finance', 'Marketing']
    if (!validDepartments.includes(department)) {
      return res.status(400).json({message: 'Invalid department'})
    }

    // Determine position based on experience
    let position
    if (experience < 2) {
      position = 'Junior'
    } else if (experience >= 2 && experience <= 5) {
      position = 'Mid-level'
    } else if (experience > 5) {
      position = 'Senior'
    }

    // Create employee with calculated position
    const employee = new Employee({
      name,
      email,
      department,
      salary,
      experience,
      position,
    })

    const savedEmployee = await employee.save()
    res.status(201).json(savedEmployee)
  } catch (err) {
    response.status(400).json({message: err.message})
  }
}

module.exports = {createEmployee}
