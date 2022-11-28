
const Libros = require('../models/libro');

class libroControllers {

    async findAll(){
        try {
            return await Libros.find().lean();
        } catch (error) {
            throw error;
        }
    }
    
    async create(libro){
        try {
            return await Libros.create(libro)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Libro.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }

    async modifico(id){
        try{
            await Libros.findByIdAndUpdate (id)
        }catch(error){
            throw error;
        }
    }


}

module.exports = new libroControllers;
