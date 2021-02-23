const { Router } = require('express');
const router = Router();
const certificadoRoutes = require('./certificado');

module.exports = (app) => {
  app.use('/api/v2/certificados', certificadoRoutes);
}