const Todo = require("../models/Todo")





exports.add = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })

    res.json({ message: "todo add success" })

}


exports.read = async (req, res) => {
    const result = await Todo.find({userId:req.user})

    res.json({ message: "todo get success", result })

}

exports.update = async (req, res) => {
    const { kuchbhi } = req.params
    await Todo.findByIdAndUpdate(kuchbhi,req.body)
    res.json({ message: "todo update success" })

}

exports.deletes = async (req, res) => {
    const {kuchbhi}= req.params

    await Todo.findByIdAndDelete(kuchbhi)
    res.json({ message: "todo delete success" })

}


