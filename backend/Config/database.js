const mongoose = require('mongoose');

MONGODB_URI =process.env.MONGODB_URI;

exports.ToDoDataBase = ()=>
{
    mongoose.connect(MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(
        console.log("Connection to MongoDB Successfull!")
    ).catch((error) =>{

        console.log(error);
        console.log("Connection to MongoDB Failed!");
        process.exit(1);
    })
}