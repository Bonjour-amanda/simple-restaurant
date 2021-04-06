const {
    menu,
    submenu
} = require("../models")

const Sequelize = require('sequelize')
const Op = Sequelize.Op

class MenuController {

    // GET ALL MENU
    async getAllMenu(req, res) {
        try {
            menu.findAll({
                    include: [{
                        model: submenu
                    }]
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result,
                    })
                })
        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed get all menu"
            })
        }

    }

    // GET ONE SINGLE MENU BY ID
    async getOneMenuId(req, res) {
        try {
            menu.findOne({
                    include: [{
                        model: submenu
                    }],
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
                message: "failed get one menu by id"
            })
        }

    }

    // GET ONE SINGLE MENU BY LABEL 
    async getOneMenuLabel(req, res) {
        try {
            menu.findOne({
                    include: [{
                        model: submenu
                    }],
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
                message: "failed get one menu by label"
            })
        }

    }

    // CREATE NEW MENU 
    async addMenu(req, res) {
        try {
            const result = menu.create({
                    label: req.body.label,
                    price: req.body.price,
                    description: req.body.description
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        data: result,
                        message: "new menu has been suceessfully added"
                    })
                })

        } catch (e) {
            return res.status(401).json({
                status: "Error!",
                message: "failed adding new menu"
            })
        }
    }

    // UPDATE MENU
    async updateMenu(req, res) {
        try {
            menu.update({
                    label: req.body.label,
                    price: req.body.price,
                    description: req.body.description
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: "success",
                        data: result,
                        message: "menu has been sucessfully updated"
                    })
                })
        } catch {
            return res.status(401).json({
                status: "Error!",
                message: "failed updating menu"
            })
        }

    }

    // DELETE MENU
    async deleteMenu(req, res) {
        try {
            menu.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(result => {
                    res.json({
                        status: 'success',
                        message: "menu has been deleted",
                        data: result
                    })
                })
        } catch {
            return res.status(401).json({
                status: "Error!",
                message: "failed deleting menu"
            })
        }

    }

}

module.exports = new MenuController;