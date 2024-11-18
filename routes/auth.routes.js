const { resgiter, login, logout } = require("../controller/auth.controller")

const router  = require("express").Router()

router
.post("/signup",resgiter)
.post("/signin",login)
.post("/signout",logout)

module.exports=router
