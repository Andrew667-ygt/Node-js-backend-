//mysql connection//
//server connection//
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port =3002;


app.use(bodyParser.urlencoded({extented: true}));
app.use(bodyParser.json());
app.use(cors());


const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    //password: '',
    database: 'users',
    port:'6768',
});



app.get("/",(req,res)=>{

    connection.query(
        'SELECT *FROM users',
        (err,result)=>{
        if (err){
            console.log(err);
        } else{
            console.log(result);
        }
    });

})





app.post("/create",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const phonenumber = req.body.phonenumber
    const email =req.body.email
    const password = req.body.password
    
    connection.query(
        'INSERT INTO users(id,name,phonenumber,email,password) VALUES(?,?,?,?,?)',[id,name,phonenumber,email,password],
        (error,result)=>{
            if (error){
                console.log(error);
            } else{
                console.log(result);
            }
        }
    );    

})






app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    connection.query(
        'DELETE FROM users WHERE id=?',[id],
        (err,result)=>{
            if (err){
                console.log(err);
            } else{
                console.log(result);
            }
        }
    );
})







app.put('/edit/:id',(req,res)=>{
    const id = req.params.id;
    const name = req.body.name;

    connection.query(
    'UPDATE users SET id=?,name=?,phone number=? WHERE 1',
        [id],
        (error,result)=>{
            if (error){
                console.log(error);
            } else{
                console.log(result);
            }
        }
    );
    
})



app.listen(port, ()=>(
    console.log('server is working on port 3002')
));
