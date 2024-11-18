const { read, add, update, deletes } = require("../controller/todo.controller")
const { userProtectedd } = require("../middlewares/auth.middleware")

const router  = require("express").Router()

router
.post("/create",userProtectedd, add)
.get("/fetch",userProtectedd, read)
.put("/edit/:kuchbhi",userProtectedd, update)
.delete("/remove/:kuchbhi",userProtectedd, deletes)

module.exports=router
