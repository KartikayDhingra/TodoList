const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

const uri = "mongodb+srv://Kartikd23:Kartik99@cluster0.ujcg9.mongodb.net/todolistDB?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
  
});

const listSchema = new mongoose.Schema({
    name: String
});

const Task = mongoose.model("Task",listSchema);

const item1 = new Task({
    name: "Wake up at 7am"
});

const item2 = new Task({
    name: "Eat brocolli"
});

const item3 = new Task({
    name: "Exercise at 7pm"
});

let items = [item1,item2,item3];


// task.save();

// let items = ["Wake up at 7am" , "Eat brocolli" , "Complete the project" , "Exercise at 7pm"];


app.get("/", (req,res) => {

    Task.find({},(err,foundItems) => {
        if(foundItems.length===0){
            Task.insertMany(items, (err) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Successfully added");
                }
            })
            res.redirect("/");
        }
        else{
            res.render("index",{newTask: foundItems});
        }
    })
});

app.post("/", (req,res) => {
    const itemName = req.body.task;
    
    const task = new Task({
        name: itemName
    })

    task.save();
    res.redirect("/");
    
});

app.post("/delete", (req,res) => {
    const checkedItem = req.body.checkbox;
    
    Task.findByIdAndRemove(checkedItem, (err) => {
        if(err){
            console.log(err);
        }
    })

    res.redirect("/");

});


app.listen(port, () => {
    console.log("Server running at port 3000");
    
});