const express = require('express');
const mongoDB = require('./db');
const app = express();
const port = 5000;
 
mongoDB()
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-with, Content-Type, Accept"
  );
  next();
})
app.use(express.json())
app.use('/api', require('./routes/CreateUser'))


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

