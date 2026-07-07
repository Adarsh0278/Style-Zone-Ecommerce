import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'
import cloudinaryConfig from './config/cludinary.js'
import router from './routes/userRoute.js'

const PORT = process.env.PORT || 5000

// App configuration
const app = express()
connectDB()
cloudinaryConfig()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})