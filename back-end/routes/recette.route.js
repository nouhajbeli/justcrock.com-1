const router = require("express").Router();
const recetteController = require("../controllers/recette.controller.js");
const multer = require("multer");

router.get("/", recetteController.getRecettes);
const DIR = "../front-end/src/assets/uploads/recettes/";
var name_file;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    name_file = fileName;
    //videofile = videoName;
    cb(null, fileName);
  }
});

var upload = multer({
    storage: storage,
    limits: {
      fileSize: 100024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
      cb(null, true);
    }
  });
router.post("/",upload.array("file", 2), recetteController.addRecette);
router.delete("/:_id",recetteController.deleteRecetteById)
router.put("/:_id",recetteController.updateRecette)
router.get("/:_id", recetteController.getrecetteById);

module.exports = router;