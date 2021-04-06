const {
    menu,
    submenu
} = require("../models")

const Sequelize = require('sequelize')
const Op = Sequelize.Op

class SubmenuController {

    // GET ALL SUBMENU
    async getAllSubmenu(req, res) {
        try {
            submenu.findAll()
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed get all submenu"
            })
        }

    }

    // GET ONE SINGLE SUBMENU BY ID
    async getOneSubmenuId(req, res) {
        try {
            submenu.findOne({
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed get one submenu by id"
            })
        }

    }
    // GET ONE SINGLE MENU BY LABEL 
    async getOneSubmenuLabel(req, res) {
        try {
            submenu.findOne({
                    where: {
                        label: req.params.label
                    }
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed get one submenu by label"
            })
        }

    }
    // CREATE NEW SUBMENU 
    async addSubmenu(req, res) {
        try {
            const result = submenu.create({
                    menuId: req.body.menuId,
                    label: req.body.label,
                    price: req.body.price,
                    description: req.body.description
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result,
                        message: "new submenu has been suceessfully added"
                    })
                })

        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed adding new menu"
            })
        }
    }
    // UPDATE SUBMENU
    async updateSubmenu(req, res) {
        try {
            submenu.update({
                    menuId: req.body.menuId,
                    label: req.body.label,
                    price: req.body.price,
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: "success",
                        data: result,
                        message: "submenu has been sucessfully updated"
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed updating submenu"
            })
        }

    }
    // DELETE SUBMENU
    async deleteSubmenu(req, res) {
        try {
            submenu.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        message: "submenu has been deleted"
                    })
                })
        } catch {
            return res.status(401).json({
                status: "Error!",
                message: "failed deleting submenu"
            })
        }

    }

}
module.exports = new SubmenuController;