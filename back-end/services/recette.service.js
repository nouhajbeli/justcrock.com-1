module.exports = new (class RecetteService {
    constructor() {
      this.recipe= require("../models/recette.model.js");
    }
  
    getRecettes() {
      return this.recipe.findAll();
    }
  
    addRecette(payload) {
      return this.recipe.create(payload);
    }
    deleteRecette({id}){
      return this.recipe.destroy({where: { id: id }})
    }
    updateRecette({id},paylod){
      return this.recipe.findByIdAndUpdate(id,paylod)
    }
    getRecetteById({id}) {
      return this.recipe.findByPk(id)
    }
    
  })();