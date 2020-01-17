const express = require('express'),
    cors=require('cors'),
    app=express();

app.use(cors());
app.use(express.json());

//Endpoints


const port=4000;
app.listen(port, ()=> console.log(`Server runningn on ${port}`));