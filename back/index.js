import express from "express";
import dotenv from "dotenv";
import Connection from "./db/conn.js";
const app = express()
import cookieParser from "cookie-parser";
import managerRoutes from "./routes/managerRoutes.js"
import userRouter from "./routes/userRoutes.js";
import managerRouter from "./routes/managerRoutes.js"
import adminRouter from "./routes/adminRoutes.js";
import cors from "cors"
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

Connection()


app.use("/api/v1/users", userRouter)
app.use("/api/v1/managers", managerRoutes);
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/managers", managerRouter)


const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

// http://localhost:3000/api/v1/products/create-product
// http://localhost:3000/api/v1/users/register-user