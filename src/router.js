import { Router as routerExpress } from "express";

const router = routerExpress()

// Rota da minha home
router.get("/", function (req, res) {
  res.render("pages/index");
})

//rota da minh página sobre
router.get("/sobre", function (req, res) {
  res.render("pages/about");
})

export default router
