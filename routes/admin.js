const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/post", (req, res) => {
  res.send("Pagina de post");
});

router.get("/categorias", (req, res) => {
  res.render("admin/categorias");
});

router.get("/categorias/add", (req, res) => {
  res.render("admin/addcategorias");
});

router.get("/teste", (req, res) => {
  res.send("Isso é um teste");
});

module.exports = router;
