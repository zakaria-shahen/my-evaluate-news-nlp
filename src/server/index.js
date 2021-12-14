const path = require("path")
const express = require("express")
const mockAPIResponse = require("./mockAPI.js")
const fetch = require("node-fetch")
require("fs")

// MiddleWare
const cors = require("cors")
require("dotenv").config()
const FormData = require("form-data")
const bodyParser = require("body-parser")

//  Run App
const app = express()
app.use(express.static("dist"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// designates what port the app will listen to for incoming requests
app.listen(8081, () => console.log("Example app listening on port 8081!"))

// Routers

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./dist/index.html"))
})

app.get("/test", (req, res) => {
  const { url } = req.query

  // if (checkURL(url)) {
  //    res.send({ status: { msg: "URL Wrong" } })
  // } 

  const key = process.env.API_KEY
  const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&`

  // create formDate body (multipart/form-data)
  const body = new FormData()
  body.append("url", url)

  fetch(baseURL, { method: "POST", body: body })
    .then(res => res.json())
    .then(r => res.send(r))
    .catch(err => res.send(err))
})


// function checkURL(url) {
//   const condition = /^(http|https):\/\/[^ "]+$/
//   const regExp = new RegExp(condition)
//   return url.match(regExp) ? true : false
// }