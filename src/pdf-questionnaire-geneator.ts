import { Questionnaire } from "./seedData";

export const generatePDFQuestionnaire = (
  doc: PDFKit.PDFDocument,
  data: Questionnaire
) => {
  doc.fontSize(20).text("Questionnaire", { align: "center" }).moveDown();

  for (const category in data) {
    if (data.hasOwnProperty(category)) {
      doc.fontSize(16).text(`Set ${category}`, { underline: true }).moveDown();

      data[category].forEach((question, index) => {
        doc
          .fontSize(14)
          .text(`${index + 1}. ${question.question}`)
          .moveDown();
        question.choices.forEach((choice) => {
          doc.text(choice).moveDown();
        });
      });
      doc.addPage();
    }
  }
};
