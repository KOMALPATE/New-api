const express=require('express');
const app= express();
const db_con=require('./config/databse.js');
const router=require('./routers/user.js');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=5000;

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use("/",router);


//database.....
db_con.connect((err)=>{
    if(err){
        console.log("database connection failed!!!",err);
    }else{
        console.log("connected to database");
    }
});


// app.use(express.json());//parse json rq body

//listen..
app.listen(PORT,function(err){
    console.log("hello")
    if(err)console.log(err);
    console.log(`server is listening on PORT ://http://localhost:${PORT}`)
});