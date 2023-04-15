import express, { Router } from "express";
import PDFDocument from "pdfkit";
import { generatePDFQuestionnaire } from "./pdf-questionnaire-geneator";
import { seedData } from "./seedData";

const app = express();

const router = Router();

router.get("/generate-questionnaire", (req, res) => {
  const doc = new PDFDocument();
  const filename = "questionnaire.pdf";

  // Set the response headers to force a download
  res.setHeader(
    "Content-disposition",
    'attachment; filename="' + filename + '"'
  );
  res.setHeader("Content-type", "application/pdf");

  // Generate the PDF content
  generatePDFQuestionnaire(doc, seedData);

  // Stream the PDF to the response
  doc.pipe(res);
  doc.end();
});

app.use(router);

// app.listen(process.env.PORT, hostname, backlog)

exports.apiQuestionnaireGenerator = app;
