const express =require('express')
const cors =require('cors')
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require('path');
const connectDb = require('./config/connectDb');
const app = express();

// config dot env file
dotenv.config();

connectDb();
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//routes
//user routes
app.use('/api/v1/users',require('./routes/userRoutes'))
//transaction routes
app.use('/api/v1/transaction',require("./routes/transactionRoute"));
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
});
//port
const PORT = 8080 || process.env.PORT;

//listen server
connectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
});