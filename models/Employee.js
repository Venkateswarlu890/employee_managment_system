const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
    enum: ['IT', 'HR', 'Finance', 'Marketing'],
  },
  salary: {
    type: Number,
    required: true,
    min: 20000,
  },
  experience: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    default: 'Junior',
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
})

const NewUser = mongoose.model('employees', EmployeeSchema)

module.exports = NewUser
