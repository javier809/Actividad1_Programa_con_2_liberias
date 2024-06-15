const axios = require('axios');
const colors = require('colors');


const  Liberiasycoloress = async () => {
  try {
    const response = await axios.get('https://api.npms.io/v2/search?q=react');
    const libraries = response.data.results;

    console.log('Lista de Librerias:'.bgGreen.black);

    libraries.forEach((library, index) => {
      const { nombre, descripcion } = library.package;
      console.log(`Libreria ${index + 1}`.underline.red);
      console.log(`Nombre: ${nombre}`.cyan);
      console.log(`Descripcion: ${descripcion}`.yellow);
      console.log('='.repeat(50).grey);
    });
  } catch (error) {
    console.error('Error al  traer datosss:'.red, error);
  }
};

Liberiasycoloress();
