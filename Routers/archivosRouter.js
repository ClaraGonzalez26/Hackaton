import express from "express";
import { sequelize } from "../loadSequelize.js";
import {
  Archivos
} from "../Model/models.js";

// Para subir y modificar foto
import multer from "multer";

const router = express.Router();

//Lo que indica donde y como se guarda la foto
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "Archivos");
  },
  filename: function (req, files, cb) {
    cb(null, Date.now() + "-" + files.originalname);
  },
});

const upload = multer({ storage: storage }).single("files");

//GET
router.get("/", function (req, res, next) {
  sequelize
    .sync()
    .then(() => {
      Archivos.findAll()
        .then((data) =>
          res.json({
            ok: true,
            data: data,
          })
        )
        .catch((error) =>
          res.json({
            ok: false,
            false: error,
          })
        );
    })
    .catch((error) =>
      res.json({
        ok: false,
        false: error,
      })
    );
});


//Para colgar archivos
router.post("/", function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).json(err);
    }
    sequelize
      .sync()
      .then(() => {
        req.body.foto = req.file.path.split("\\")[1];
        Archivos.create(req.body)
          .then((data) => res.json({ ok: true, data: data }))
          .catch((error) => res.json({ ok: false, error }));
      })
      .catch((error) => {
        res.json({
          ok: false,
          error: error,
        });
      });
  });
});

//Eliminar Archivos
router.delete("/:id", function (req, res, next) {
  sequelize
    .sync()
    .then(() => {
      Archivos.destroy({ where: { id: req.params.id } })
        .then((data) => res.json({ ok: true, data }))
        .catch((error) => res.json({ ok: false, error }));
    })
    .catch((error) => {
      res.json({
        ok: false,
        error: error,
      });
    });
});
export default router;