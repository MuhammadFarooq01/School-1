import express from "express"
import { configDotenv } from "dotenv"

configDotenv()
const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})