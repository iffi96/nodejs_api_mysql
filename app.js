const userRouter = require('./routes/user.routes');

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.json({ message: "ok" })
})

app.use('/api/users', userRouter)


app.listen(port, () => {
    console.log("Example app ")
});