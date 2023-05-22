import express, { Application } from "express";
import cors from "cors";
// application routes
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes --> controller --> service
app.use("/api/v1/user", userRoutes);

export default app;
