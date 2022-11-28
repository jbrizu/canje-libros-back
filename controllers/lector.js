
const Lectores = require('../models/lector');

class lectorControllers {

    async findAll(){
        try {
            return await Lectores.find().lean();
        } catch (error) {
            throw error;
        }
    }
    
    async create(lector){
        try {
            return await Lectores.create(lector)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Lectores.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new lectorControllers;