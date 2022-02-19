const express = require('express');
const app = express();

//console.log('HELLO WEB 2.0');

/* 
app.get('/',(req,res) => {
     res.send("Hello Web 2.0");
 }) 
*/

app.post('/', (req,res)=> {
    var email = req.body.email;
    var amount = req.body.amount;

    res.send({"amount" : amount , "email" : email});
})

app.listen(3000,() => {
    console.log('server is running on port 3000');
});