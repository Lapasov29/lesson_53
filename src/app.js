const express = require("express")

const PORT = process.env.PORT || 9898

const app = express()

app.listen(PORT, () => console.log("Server is running on port " + PORT))