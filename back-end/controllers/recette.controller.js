const recetteService = require("../services/recette.service.js");
const recetteModel= require("../models/recette.model.js");


module.exports = {
  async getRecettes(req, res, next) {
    try {
      const recettes= await recetteService.getRecettes();
      res.send(recettes);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },

 

  async addRecette(req, res, next) {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(req.files[i].filename);
    }
    console.log(req.files);
    const Recette = new recetteModel({
      IdUser: req.body.IdUser,
      titre: req.body.titre,
      description: req.body.description,
      image: reqFiles[1],
      pdf: reqFiles[0],
      category:req.body.category
     
    });
    try {
      const recette = await recetteService.addRecette(Recette);
      res.send(recette);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },
  async deleteRecetteById(req, res, next) {
    try {
      const recette = await recetteService.deleteRecette(req.params);
      res.send(recette);
    } catch (error) {
      // handle error
      res.send(error);
    }
  },
 
  async updateRecette(req, res, next) {
    try {
      const recette = await recetteService.updateRecette(req.params,req.body, {upsert: true});
      res.send(recette);
    } catch (error) {
      // handle error
      res.send(error);
    }
  }
};