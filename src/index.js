const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./router/route');
const cors = require("cors")


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


mongoose.connect("mongodb+srv://yashsingh:8i1kfhU26wUDrXft@cluster0.e53dru9.mongodb.net/BlogingProject", { 
    useNewUrlParser: true})  

.then( () => console.log("MongoDb is Ready for you"))
.catch ( err => console.log(err));

app.use('/', route);



app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});