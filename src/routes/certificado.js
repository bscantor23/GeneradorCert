const { HandlerErrors } = require('../errors/index.js');

const base64 = require('js-base64');
const { Router } = require('express');
const router = Router();

const generatePdf = require('../utils/app');


//Funcional
router.post('/', async (req, res) => {

    const status = generatePdf(req.body);

    if(req.body.tipo_certificado){        
        return res.send({ message: status ? "Se creó un nuevo certificado en la carpeta public" : "Hubieron fallos al generar el certificado, intente de nuevo" })
    }
}),

module.exports = router;