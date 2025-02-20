import "reflect-metadata";
import express from "express";
import "./database"
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));

app.use(routes)

app.listen(3000, () => console.log("\u{1F525} Server is running"));
