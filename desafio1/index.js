const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Maratona Full Cycle 2.0'))

app.listen(port, () => console.log(`Maratona FullCycle 2.0, App listen to http://localhost:${port}`))