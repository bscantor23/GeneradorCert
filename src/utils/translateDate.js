
function getMonthLetters(num) {
  switch (num) {
    case 1: { return "Enero" }
    case 2: { return "Febrero" }
    case 3: { return "Marzo" }
    case 4: { return "Abril" }
    case 5: { return "Mayo" }
    case 6: { return "Junio" }
    case 7: { return "Julio" }
    case 8: { return "Agosto" }
    case 9: { return "Septiembre" }
    case 10: { return "Octubre" }
    case 11: { return "Noviembre" }
    case 12: { return "Diciembre" }
  }
};

function getUnidades(num, special) {
  switch (num) {
    case 1: { return special ? "uno" : "ún" }
    case 2: { return "dos" }
    case 3: { return "tres" }
    case 4: { return "cuatro" }
    case 5: { return "cinco" }
    case 6: { return "seis" }
    case 7: { return "siete" }
    case 8: { return "ocho" }
    case 9: { return "nueve" }
  }
}

function getOrdinal(num) {
  num = Number(num);
  switch (num) {
    case 1:  return "PRIMERO" 
    case 2:  return "SEGUNDO" 
    case 3:  return "TERCERO" 
    case 4:  return "CUARTO" 
    case 5:  return "QUINTO" 
    case 6:  return "SEXTO" 
    case 7:  return "SEPTIMO" 
    case 8:  return "OCTAVO" 
    case 9:  return "NOVENO" 
    case 10:  return "DECIMO" 
    case 11:  return "UNDECIMO"
  }
}

function getDecenas(num) {
  switch (num) {
    case 1: { return "diez" }
    case 2: { return "veinte" }
    case 3: { return "treinta" }
    case 4: { return "cuarenta" }
    case 5: { return "cincuenta" }
    case 6: { return "sesenta" }
    case 7: { return "setenta" }
    case 8: { return "ochenta" }
    case 9: { return "noventa" }
  }
}

function getCentenas(num) {
  switch (num) {
    case 1: { return "cien" }
    case 2: { return "doscientos" }
    case 3: { return "trescientos" }
    case 4: { return "cutroscientos" }
    case 5: { return "quinientos" }
    case 6: { return "seiscientos" }
    case 7: { return "setecientos" }
    case 8: { return "ochocientos" }
    case 9: { return "novecientos" }
  }
}

function getYearLetters(num) {
  let miles = Math.floor(num / 1000);
  miles = getUnidades(miles, true) == "uno" ? "mil" : getUnidades(miles, true) + " mil";

  let unidades = num % 10;
  let decenas = Math.floor((num % 100) / 10);
  let centenas = Math.floor((num % 1000) / 100);

  centenas = (getCentenas(centenas) == "cien" && unidades != 0 && decenas != 0) ? " ciento" : getCentenas(centenas);

  if (decenas == 0 && unidades == 0 && centenas == 0) {
    return miles;
  }
  if (decenas == 0 && unidades != 0) {
    return miles + (centenas ? " " + centenas : ``) + " " + getUnidades(unidades, true);
  } else if (decenas == 2 && unidades != 0) {
    decenas = " veinti";
    unidades = getUnidades(unidades, true);
    return miles + decenas + unidades;
  } else if (decenas == 1 && unidades != 0) {
    switch (unidades) {
      case 1: { return miles + " once" }
      case 2: { return miles + " doce" }
      case 3: { return miles + " trece" }
      case 4: { return miles + " catorce" }
      case 5: { return miles + " quince" }
      case 6: { return miles + " dieciseis" }
      case 7: { return miles + " diecisiete" }
      case 8: { return miles + " dieciocho" }
      case 9: { return miles + " diecinueve" }
    }
  } else {
    decenas = " " + getDecenas(decenas);
  }
  unidades = getUnidades(unidades, true);

  return miles + (centenas ? " " + centenas : ``) + (decenas ? decenas : ``) + (unidades ? ` y ${unidades}` : ``);
};

function getDayLetters(num) {
  let unidades = num % 10;
  let decenas = Math.floor((num % 100) / 10);

  if (decenas == 3 && unidades == 1) {
    return "treinta y uno";
  }
  if (decenas == 0 && unidades != 0) {
    return getUnidades(unidades);
  } else if (decenas == 2 && unidades != 0) {
    decenas = "veinti";
    unidades = getUnidades(unidades);
    return decenas + unidades;
  } else if (decenas == 1 && unidades != 0) {
    switch (unidades) {
      case 1: { return "once" }
      case 2: { return "doce" }
      case 3: { return "trece" }
      case 4: { return "catorce" }
      case 5: { return "quince" }
      case 6: { return "dieciseis" }
      case 7: { return "diecisiete" }
      case 8: { return "dieciocho" }
      case 9: { return "diecinueve" }
    }
  } else {
    decenas = getDecenas(decenas);
  }
  unidades = getUnidades(unidades);

  return decenas + (unidades ? ` y ${unidades}` : ``);
};

module.exports = { getMonthLetters, getYearLetters, getDayLetters, getOrdinal };