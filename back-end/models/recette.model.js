const mongoose = require("mongoose");
const recetteSchema = new mongoose.Schema({
  IdUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  titre: {
    type: String,
    required:true
  },
  description: 
    {
      type: String,
      trim:true,
      
    }
  ,
  image: 
    {
      type: String
    },
    pdf: 
    {
      type: String
    },
     categorie:
    {
    type:String
    },
    comments:
    {
        type:[
            {
            commenterId  : String, 
            commenterUsername:String, 
            text:String, 
            timestamp: Number

            }

        ]
        
    },
    rates: {
      type: [
        {
          raterId: String,
          rates: Number
        }
      ]
    }
}, 
    {
        timestamp:true
    }
  
);

const recetteModel = mongoose.model("recettes", recetteSchema);

module.exports = recetteModel;