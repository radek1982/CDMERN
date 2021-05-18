const express = require('express')
const app = express()
const port = 3000

const User = require('./models/User');
const Company = require('./models/Company');

app.get('/api/users/new', (req, res) => {
  
    const u = new User();
    res.send(u);

});


app.get('/api/companies/new', (req, res) => {
  
    const u = new Company();
    res.send(u);

});


app.get('/api/user/company', (req, res) => {
  
    const u = new User();
    const c = new Company();
    res.send({user: u, company: c});

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})