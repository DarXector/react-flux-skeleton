var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "234kjw",
        "text": "Eggs"
    },
    {
        "id": "as82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "Frog Legs"
    }
];

var todos = [
    {
        "id": "234kjwsdf",
        "text": "Make a sandwich"
    },
    {
        "id": "as82wasd",
        "text": "Go back to school"
    },
    {
        "id": "234sk1gfdb",
        "text": "Eat Bacon"
    }
];

var subscribers = [
    {
        "id": "dhggfhd5",
        "email": "bob@bob.com",
        "firstName": "Bob"
    },
    {
        "id": "dhggfhd5",
        "email": "joe@joe.com",
        "firstName": "Joe"
    }
];

// INGREDIENTS

app.get('/ingredients', function(req, res) {
    console.log("GET From SERVER");
    res.send(ingredients);
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

// TODOS

app.get('/todos', function(req, res) {
    console.log("GET From SERVER");
    res.send(todos);
});

app.post('/todos', function(req, res) {
    var todo = req.body;
    console.log(req.body);
    todos.push(todo);
    res.status(200).send("Successfully posted ingredient");
});

// SUBSCRIBERS

app.get('/subscribers', function(req, res) {
    console.log("GET From SERVER");
    res.send(subscribers);
});

app.post('/subscribers', function(req, res) {
    var subscriber = req.body;
    subscriber.id = Math.floor(Date.now() / 1000) + req.body.email;
    console.log(req.body);
    subscribers.push(subscriber);
    res.status(200).send("Successfully posted ingredient");
});

app.listen(6060);
