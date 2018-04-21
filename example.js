
const express = require('express')
const bodyParser = require('body-parser')
const { usersNdJobs, userByJob, addUser , addUserToCompany } = require ('./db/db.js')

const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  usersNdJobs()
    .then((users) => {
      res.render('users', { users })
    })
    .catch(console.error)
})

app.get('/api/company/users', (req, res) => {
  const companyname = req.query.companyName
  console.log(companyname)
  userByJob(companyname)
    .then((users) => {
      res.render('job', { users })
    }).catch(console.error)
})

app.post('/api/users/add', (req, res) => {
  const userName = req.body.userName
  const jobName = req.body.jobName
  console.log("user name = "+userName+", job name : "+jobName)
  addUser(userName, jobName)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      res.status(404).json({ 'message': error.toString() })
    })
})
app.post('/users/add', (request, response) => {
  const { userName, job } = request.body
  addTeam(userName, job)
  .then((user) => {
    response.status(200).json({
      "userName": user.name,
      "city": user.job
    })
  .catch((err) => {
    request.status(400).json({"message": err})
  })
})
}
)

app.post('/api/user/company/add', (req, res) => {
  const userName = req.body.userName
  const companyName = req.body.companyName
  console.log(userName, companyName)
  addUserToCompany(userName, companyName)
  .then((result) => {
    res.json(result)
  })
  .catch(console.error)
})

app.get('/api/company/user', (req, res) => {
 const companyname = req.query.companyName
 console.log(companyname)
 userByJob(companyname)
 .then((users) => {
   res.render('jobs', { users })
 })
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)

/*  
try
{
    const user  = await addUser(userName, jobName);
    res.json(result)
}
catch(error) 
{
      res.status(404).json({ 'message': error.toString() })
} */