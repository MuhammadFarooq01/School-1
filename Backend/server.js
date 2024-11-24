import express from "express"
import { configDotenv } from "dotenv"
import cookieParser from "cookie-parser"

configDotenv()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cookieParser())

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})