const express = require('express')
const cors = require('cors')
const SailorRoutes = require('./Sailor')

const app = express()
app.use(express.json())
app.use(cors())

// Import Sailor routes
app.use(SailorRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`)
})