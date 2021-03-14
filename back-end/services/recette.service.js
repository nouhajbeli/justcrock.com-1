module.exports = new (class RecetteService {
    constructor() {
      this.recette= require("../models/recette.model.js");
    }
  
    getRecettes() {
      return this.recette.find();
    }
  
    addRecette(payload) {
      return this.recette.create(payload);
    }
    deleteRecette({_id}){
      return this.recette.findByIdAndRemove(_id)
    }
    updateRecette({_id},paylod){
      return this.recette.findByIdAndUpdate(_id,paylod)
    }
    
  })();