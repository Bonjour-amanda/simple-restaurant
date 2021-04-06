let Sequelize = require('sequelize')
const {
    Menu,
    Submenu
} = require("../models")

let fs = require('fs')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should(); // import assertion should from chai

chai.use(chaiHttp); // user chai Http

// UNIT TESTING FOR MENU API
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

// UNIT TESTING FOR SUBMENU API
describe('SubMenu API', () => {


    describe('/GET All Submenu', () => {
        it('it should GET All Submenu', (done) => {
            chai.request(server)
                .get('/submenu/allSubmenu')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    })

    describe('/GET Single Submenu by id', () => {
        it('it should GET One Submenu by id', (done) => {
            chai.request(server)
                .get('/submenu/oneSubmenu/2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    })

    describe('/GET Single Submenu by Label', () => {
        it('it should GET One Submenu by Label', (done) => {
            chai.request(server)
                .get('/submenu/oneSubLabel/C1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    })

    describe('/POST Add New Submenu', () => {
        it('It should Create New Submenu', (done) => {
            chai.request(server)
                .post('/submenu/newSubmenu')
                .send({
                    menuId: 3,
                    label: "C2",
                    price: 3500,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.should.have.property("message").eql("new submenu has been suceessfully added")
                    done()
                })
        })
    })

    describe('/PUT Update Submenu by id', () => {
        it('it should Update a Submenu given the id', (done) => {
            chai.request(server)
                .put('/submenu/updateSubmenu/5')
                .send({
                    menuId: 2,
                    label: "B2",
                    price: 1500,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('submenu has been sucessfully updated');
                    res.body.should.have.property('data')
                    done();
                });
        });
    });

    describe('/DELETE Submenu', () => {
        it('It should Delete a Submenu', (done) => {
            chai.request(server)
                .delete('/submenu/delete/9')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    res.body.should.have.property('message').eql('submenu has been deleted')
                    done()
                })
        })
    })
})