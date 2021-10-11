const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Test App Service in Azure!'))

let data = {"Info": "Node AppService Docker is ready"}
app.listen(3000, () => console.log(JSON.stringify(data)))


