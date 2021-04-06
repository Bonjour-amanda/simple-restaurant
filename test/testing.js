let Sequelize = require('sequelize')
const {
    Menu,
    submenu
} = require("../models")

let fs = require('fs')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should(); // import assertion should from chai

chai.use(chaiHttp); // user chai Http

describe('Menu API', () => {

    describe('/GET All Menu', () => {
        it('it should GET All Menu', (done) => {
            chai.request(server)
                .get('/menu/allMenu')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    })

    describe('/GET Single Menu by id', () => {
        it('it should GET One Menu by id', (done) => {
            chai.request(server)
                .get('/menu/oneMenu/2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    })

    describe('/GET Single Menu by Label', () => {
        it('it should GET One Menu by Label', (done) => {
            chai.request(server)
                .get('/menu/oneLabel/B')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    })

    describe('/POST Add New Menu', () => {
        it('It should Create New Menu', (done) => {
            chai.request(server)
                .post('/menu/newMenu')
                .send({
                    label: "G",
                    price: 30000,
                    description: "Mie Matcha"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.should.have.property("message").eql("new menu has been suceessfully added")
                    done()
                })
        })
    })

    describe('/PUT Update Menu by id', () => {
        it('it should Update a menu given the id', (done) => {
            chai.request(server)
                .put('/menu/updateMenu/5')
                .send({
                    label: "C",
                    price: 18000,
                    description: "Mie Kangkung"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('menu has been sucessfully updated');
                    res.body.should.have.property('data')
                    done();
                });
        });
    });

    describe('/DELETE Menu', () => {
        it('It should Delete a menu', (done) => {
            chai.request(server)
                .delete('/menu/deleteMenu/7')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    res.body.should.have.property('message').eql('menu has been deleted')
                    done()
                })
        })
    })
})