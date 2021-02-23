const { content } = require("./styles");

function generateContent(variables) {
  if (variables.tipo_certificado) {
    let content;
    switch (variables.tipo_certificado) {
      case "Estudios":

        content = [
          {
            image: __dirname + '/assets/encabezado.png', alignment: 'center', height: 100, width: 550
          },
          {
            text: `EL SUSCRITO COORDINADOR DEL PROYECTO CURRICULAR DE ${variables.carrera.toUpperCase()} ` +
              `DE LA UNIVERSIDAD DISTRITAL "FRANCISCO JOSE DE CALDAS" APROBADA POR RESOLUCION NUMERO 3410 ` +
              `DEL 9 DE DICIEMBRE DE 1952 Y 5128 DEL 30 DE NOVIEMBRE DE 1955 DEL MINISTERIO DE EDUCACION NACIONAL, NIT.: 899999230-7.`
            , style: 'BaseCuerpo', margin: [0, 60, 0, 0], alignment: 'justify'
          },
          {
            text: `CERTIFICA`, style: 'BaseCuerpo', margin: [0, 30, 0, 20], alignment: 'center'
          },
          {
            columns: [
              {
                text: 'QUE EL(LA) ESTUDIANTE', width:170, margin: [0, 0, 0, 15]
              },
              {
                stack: [
                  {
                    text: `: ${variables.apellidos.toUpperCase()} ${variables.nombres.toUpperCase()}`, margin: [0, 0, 0, 15]
                  },
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: 'CODIGO', width:170, margin: [0, 0, 0, 15]
              },
              {
                stack: [
                  {
                    text: `: ${variables.codigo}`, margin: [0, 0, 0, 15]
                  },
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: 'IDENTIFICACION', width:170, margin: [0, 0, 0, 15]
              },
              {
                stack: [
                  {
                    text: `: ${variables.numero_documento}`, margin: [0, 0, 0, 15]
                  },
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: 'PROYECTO CURRICULAR', width:170, margin: [0, 0, 0, 15]
              },
              {
                stack: [
                  {
                    text: `: ${variables.carrera.toUpperCase()}`, margin: [0, 0, 0, 15], lineHeight: 1.5
                  },
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: 'PERIODO ACADEMICO', width:170, margin: [0, 0, 0, 15]
              },
              {
                stack: [
                  {
                    text: `: ${variables.periodo_ac} SEMESTRE DEL AÑO ${variables.em_anio}`, margin: [0, 0, 0, 15]
                  },
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: 'NIVEL', width:170, margin: [0, 0, 0, 15]
              },
              {
                stack: [
                  {
                    text: `: ${variables.sem}`, margin: [0, 0, 0, 15]
                  },
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: 'INTENSIDAD SEMANAL', width:170
              },
              {
                stack: [
                  {
                    text: `: 28 HORAS`, margin: [0, 0, 0, 15]
                  },
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: 'JORNADA', width:170
              },
              {
                stack: [
                  `: DIURNA`
                ]
              }
            ]
          },
          {
            text: `ES ESTUDIANTE REGULAR DEL MENCIONADO PROYECTO CURRICULAR, `+
            `SE EXPIDE LA PRESENTE CERTIFICACION A SOLICITUD DEL INTERESADO A `+
            `LOS ${variables.em_dia} DIAS DEL MES DE ${variables.em_mes_letters.toUpperCase()} DEL AÑO ${variables.em_anio}.`, style: 'BaseCuerpo', margin: [0, 40, 0, 0], alignment: 'justify'
          },
          {
            image: __dirname + '/assets/firma.PNG', alignment: 'center', height: 100, width: 180, margin: [0, 40, 0, 0]
          }
        ];
        break;
      case "Laboral":

        content = [
          {
            text: `Bogotá D.C, ${variables.em_mes_letters} ${variables.em_dia} de ${variables.em_anio}`, style: 'BaseCuerpo', alignment: 'left', italics: true, margin: [0, 100, 0, 0]
          },
          {
            image: __dirname + '/assets/logo.png', alignment: 'center', height: 190, width: 170, margin: [0, 20, 0, 0]
          },
          {
            text: `UNIVERSIDAD FRANCISCO JOSE DE CALDAS`, style: 'BaseCuerpo', alignment: 'center', bold: true, fontSize: 15, margin: [0, 30, 0, 0]
          },
          {
            text: `CERTIFICA:`, style: 'BaseCuerpo', alignment: 'left', bold: true, margin: [0, 30, 0, 0]
          },
          {
            text: `Que el(la) señor(a) ${variables.apellidos.toUpperCase()} ${variables.nombres.toUpperCase()} identificado(a) con `+
            `${variables.tipo_documento} No. ${variables.numero_documento} de ${variables.ciudad.toUpperCase()} `+
            `labora con la UNIVERSIDAD DISTRITAL FRANCISO JOSÉ DE CALDAS, desde el día ${variables.fec_ingreso_dia} `+
            `de ${variables.fec_ingreso_mes_letters} del ${variables.fec_ingreso_anio}, desempeñando el cargo de `+
            `${variables.puesto_trabajo.toUpperCase()} devengando un salario de $${variables.salario} pesos colombianos.`
            , style: 'BaseCuerpo', margin: [0, 30, 0, 0], alignment: 'justify'
          },
          {
            text: `Para constancia de lo anterior, se firma en Bogotá D.C a los ${variables.em_dia_letters} `+
            `(${variables.em_dia}) días del mes ${variables.em_mes_letters} del año ${variables.em_anio_letters} `+ 
            `(${variables.em_anio}).`, style: 'BaseCuerpo', margin: [0, 30, 0, 0], alignment: 'justify'
          },
          {
            image: __dirname + '/assets/firma.PNG', alignment: 'center', height: 100, width: 180, margin: [0, 40, 0, 0]
          }
        ];
        break;
    }

    return content;

  } else {
    return;
  }
}


module.exports = { generateContent }