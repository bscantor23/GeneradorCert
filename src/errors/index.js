const HandlerErrors = (error) => {
    console.log(error);
    let message = 'Hubo un error en nuestros servicios';
    let status = 500;

    console.log(error.message)
  
    return { message, status }
  }
  
  module.exports = { HandlerErrors }