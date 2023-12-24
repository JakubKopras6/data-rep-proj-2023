const express = require('express')
const app = express() //Create new express app
const port = 4000 //Set port
var bodyParser = require('body-parser')

//Used to access data sent in the request body 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Used for allowing cross-origin resource sharing
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Require Mongoose
const mongoose = require('mongoose');

//Used to supress strictQuery warning 
mongoose.set('strictQuery', false);

main().catch(err => console.log(err));

 // MongoDB Link
async function main() {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.evtgvin.mongodb.net/?retryWrites=true&w=majority");
}

//schema for employees
const employeeSchema = new mongoose.Schema({
    id: String,
    name: String,
    EmpNumber: String,
    email: String,
    department: String,
    salary: String
});

//Creates a model based on the employeee schema above
const employeeModel = mongoose.model('employees', employeeSchema);

//Using the request body to create a new employee document
app.post('/api/employees', (req, res) => {
    employeeModel.create({
        id: req.body.id,
        name: req.body.name,
        EmpNumber: req.body.EmpNumber,
        email: req.body.email,
        department: req.body.department,
        salary: req.body.salary
    })

    res.send('Data Recieved');
})

//Find all employees in the database and send back their data as JSON
app.get('/api/employees', (req, res) => {
    employeeModel.find((error, data) => {
        res.json(data);
    })
})

//Find a employee by their ID and send their data back in JSON format
app.get('/api/employees/:id', (req, res) => {
    employeeModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Find a employee by their ID and update their data
app.put('/api/employees/:id', (req, res) => {
    employeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

//Find a employee by their ID and delete it
app.delete('/api/employees/:id', (req, res) => {
    employeeModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => { 
        res.send(data);
    })
})

//Listen for incoming requests on port 4000
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})


