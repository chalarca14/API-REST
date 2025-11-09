import express from "express";
const app = express();
const PORT = 3000;
import users from "./routes/users.js"


app.use(express.json());

app.use("/user", users)


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})