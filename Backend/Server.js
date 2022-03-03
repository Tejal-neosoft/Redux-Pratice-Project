import express from 'express'
import cors from 'cors'
import { connection } from './config/connection.js'
import postRoutes from './routes/dataRoutes.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config()

app.use(express.json({ limit: '30mb', extended: false }))
app.use(express.urlencoded({ limit: '30mb', extended: false }))
app.use(cors());

connection()

app.use("/posts", postRoutes)
app.listen(process.env.PORT, (err) => {
    if (err)
        throw err;
    console.log(`Working on ${process.env.PORT}`)
})