import express from 'express'

const app = express();

app.get('/',(req,res) => {
    res.send("Home is sending something")
})

app.listen(3000, () => {
    console.log("app is listnign on port 3000!!!!");
})
