const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const {User} = require('./userSchema')
const app = express()
dotenv.config()
mongoose.connect(process.env.DB_URL)

app.use(bodyParser.json())
app.use(cors({origin: process.env.CLIENT_URL}));



app.post('/api/user', (req, res) => {
   const user = new User({
	  email: req.body.email,
	  nickname: req.body.nickname,
	  password: req.body.password,
	  country: req.body.country,
	  year: req.body.year,
	  club: req.body.club
   })
   user.save((err, doc) => {
	  if (err) {res.status(400).send(err)}
	  res.status(200).send(doc)
   })
})

app.listen(process.env.PORT, () => console.log(`Server start at ${process.env.PORT}`))


