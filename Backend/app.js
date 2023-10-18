import express  from "express"
const app = express()
const port = 3000


app.listen(port, function () {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

export default app