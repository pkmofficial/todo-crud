require("dotenv").config();
const app = require("./app");
// const BASE_URL = "http://localhost:4000"
const BASE_URL = "https://todo-crud-lake.vercel.app"
const PORT = process.env.PORT || BASE_URL ;

app.listen( PORT,()=>{

    console.log(`App is listening at: http://localhost:${PORT}`);

})
