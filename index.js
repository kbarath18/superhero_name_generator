import express from "express";
import {randomSuperhero} from 'superheroes';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.post("/submit", (req, res)=>{
    var hero =randomSuperhero();
    res.render("index.ejs", {
        heroName: hero
    })
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})