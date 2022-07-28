const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const _ = require("lodash");

const Programme = require("../models/programmeModel");

//@GET programmes
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const programmes = await Programme.find({});
    res.json(programmes);
  })
);
//@GET programme by id
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const id = req.params.id;
    console.log(id)
  
      if (!mongoose.isValidObjectId(id)) {
        return res.json({
          error: true,
          message: "Invalid programme id",
        });
      }
  const  programme = await Programme.findById(id);
   
    if (_.isEmpty(programme)) {
      return res.json({
        error: true,
        message: "No Such programme exits",
      });
    }
    res.json(programme);
  })
);
//@POST programmes
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const newProgramme = req.body;
    const programme = await Programme.create(newProgramme);
    res.json(programme);
  })
);

//@PUT programmes
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.body.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid programme id",
      });
    }

    const modifiedProgramme = req.body;
    const updatedProgramme = await Programme.findByIdAndUpdate(
      id,
      modifiedProgramme,
      {
        upsert: true,
        new: true,
      }
    );
    res.json(updatedProgramme);
  })
);

//@DELETE programme
router.delete(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.query.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid programme id",
      });
    }
    console.log(id);
    const programme = await Programme.findByIdAndRemove(id);
    if (programme ===null) {
      return res.json({
        error: true,
        mesaage: "No programme with such id",
      });
    }
    res.json(programme);
  })
);

module.exports = router;