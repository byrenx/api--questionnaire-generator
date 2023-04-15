import express, { Router } from "express";

const app = express();

const router = Router();

app.use(router);

// app.listen(process.env.PORT, hostname, backlog)

exports.apiQuestionnaireGenerator = app;
