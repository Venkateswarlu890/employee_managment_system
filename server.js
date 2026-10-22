const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()
dotEnv.config()

app.use(express.json())
app.use('/employees', employeeRoutes)
mongoose.set('useCreateIndex', true)

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected Successfully...')
  })
  .catch(error => {
    console.log('Error Message: ', error.Message)
  })

app.listen(3000, () => {
  console.log('Server Running at Port: 3000...')
})

module.exports = app
