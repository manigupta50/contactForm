import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import contactFromRouter from "./src/feature/contactform.routes.js"




const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/contactForm", contactFromRouter);

export default app;