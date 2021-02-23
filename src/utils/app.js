const PdfPrinter = require('pdfmake');
const fs = require("fs");

const styles = require("./styles");
const { generateContent } = require("./pdfContent");
const { getMonthLetters, getYearLetters, getDayLetters, getOrdinal } = require('./translateDate');

module.exports = (variables) => {

  let response = true;
  let today = new Date();

  variables.em_dia = today.getDate();
  variables.em_dia_letters = getDayLetters(today.getDate()) == "un" ? "primer" : getDayLetters(today.getDate());
  variables.em_mes = today.getMonth() + 1;
  variables.em_mes_letters = getMonthLetters(today.getMonth() + 1);
  variables.em_anio = today.getFullYear();
  variables.em_anio_letters = getYearLetters(today.getFullYear());

  variables.em_mes >=6 ? variables.periodo_ac = "SEGUNDO" : variables.periodo_ac = "PRIMER";

  variables.sem = getOrdinal(variables.semestre);

  if(variables.ingreso){
    let fec_ingreso = new Date(variables.ingreso);
    variables.fec_ingreso_dia = fec_ingreso.getDate() + 1;
    variables.fec_dia_letters = getDayLetters(fec_ingreso.getDate()) == "un" ? "primer" : getDayLetters(fec_ingreso.getDate());
    variables.fec_ingreso_mes = fec_ingreso.getMonth() + 1;
    variables.fec_ingreso_mes_letters = getMonthLetters(fec_ingreso.getMonth() + 1);
    variables.fec_ingreso_anio = fec_ingreso.getFullYear();
    variables.fec_anio_letters = getYearLetters(fec_ingreso.getFullYear());
  }

  let docDefinition = {
    pageMargins: [70, 10, 70, 50],
    content: generateContent(variables),
    defaultStyle: {
      font: 'Helvetica'
    },
    styles
  }

  !docDefinition.content ? response = false : null;

  var fonts = {
    Helvetica: {
      normal: 'Helvetica',
      bold: 'Helvetica-Bold',
      italics: 'Helvetica-Oblique',
      bolditalics: 'Helvetica-BoldOblique'
    }
  };  

  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(docDefinition);

  pdfDoc.pipe(fs.createWriteStream(`src/public/${variables.numero_documento}${variables.tipo_certificado == "Estudios" ? "E" : "L"}.pdf`));
  pdfDoc.end();

  return response;
}
