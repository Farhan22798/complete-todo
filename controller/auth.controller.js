const User = require("../models/User")
const { findOne } = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

exports.resgiter = async (req, res) => {
    const { email, password } = req.body

    const result = await User.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "email already exists" })

    }
    const hash = await bcrypt.hash(password, 10)

    await User.create({ ...req.body, password: hash })

    res.json({ message: "register success" })
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "email does not exist" })

    }

    const isVerify = await bcrypt.compare(password, result.password)

    if (!isVerify) {
        return res.status(409).json({ message: "password is incorrect" })

    }

    const token = jwt.sign({ name: result.name, _id: result._id },process.env.JWT_KEY)

    res.cookie("auth",token,{maxAge:1000*60*60})
//...result,password:null
    res.json({ message: "login success" ,result})
}

exports.logout = async (req, res) => {
    res.clearCookie("auth")
    res.json({ message: "logout success" })
}

