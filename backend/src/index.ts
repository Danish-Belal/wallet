
import express from "express"
import { userRouter } from './router/user'
const app = express();

app.use('v1/api/user', userRouter)

app.listen(5000,()=>{
     console.log("server is running on", 5000);
     
})