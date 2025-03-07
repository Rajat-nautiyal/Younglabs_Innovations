const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ 
    origin: ['http://localhost:5173','https://younglabs-innovations-ochre.vercel.app/'],
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization" // Allowed headers
}));

app.use(express.json()); //Parses incoming JSON payloads.

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.get("/api/greet", (req, res)=>{
    const name = req.query.name;
    if(!name){
        return res.status(400).json({error: "Name is required."});
    }
    res.status(200).json({message: `"Hello, ${name}! Welcome to Younglabs.`})

})
//for vercel deployement
app.options("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://younglabs-innovations-ochre.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.sendStatus(204);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;
