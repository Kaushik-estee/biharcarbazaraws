const express = require("express");
const cors = require("cors");
require("dotenv").config()
const { connection } = require("./db");
const app = express();

app.use(express.json());
const carRouter = require('./routes/cars');
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome To The Home Page");
})
app.use('/cars', carRouter);
// app.use("/", userRouter)
// app.use(authentication);
// app.use("/", KanbanRoutes)

app.listen(process.env.PORT, async () => {
    console.log(`The app should be runing in ${process.env.PORT}`);
    try {
        await connection;
        console.log("DB is connected");
    }
    catch (err) {
        console.log(err.message)
    }

})