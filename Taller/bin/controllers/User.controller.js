const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

//CRUD
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "El contenido no debe ser vacío"
        })
    }

    let { username, password, email, role} = req.body;
    let user = new User({
        username,
        password,
        email,
        role, 
    });

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;

            user.save().then((data) =>{
                res.send(data);
            }).catch ((err) => {
                res.status(500).send({
                    message: err.message || "Ocurrió un error mientras se creaba el usuario",
                });
            });
        })
    })

    
};

exports.findAll = (req, res) => {
    User.find({}, (err, data) =>{
        if(err)
            res.status(500).send({
                message: err.message || "Se ha presentado un error en la busqqueda"
            })
        else res.send(data);
    });
};

exports.findOne = (req, res) =>{
    User.findById(req.params.idUser, (err, data) =>{
        if(err){
            if(err.kind === "no_found"){
                res.status(404).send({
                    message: "No se encontró el usuario"
                })
            } else{
                res.status(500).send({
                    message: "Error a tratar de obtener el usuario"
                })
            }
        } else {
            res.send(data);
        }
            
    });
};

exports.login = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Debe ingresar datos de logueo",
        });
    }
    let { username, password} = req.body;

    User.findOne({username}).then((user) => {
        if(!user) {
            res.status(404).json({
                usernamefound:"Usuario no encontrado",
            });
        }
        bcrypt.compare(password, user.password).then((isMatch) =>{
            if(isMatch){
                fs.readFile(
                    path.join( __dirname, "../keys/private.key"),
                    "utf-8",
                    (err, privateKey) => {
                        if (err) throw err;
                        let payload = {
                            id: user._id,
                            usermane: user.username,
                            role: user.role,
                        };
                        console.log(payload);
                        jwt.sign(payload,privateKey, {
                                expiresIn: 31556926,
                                algorithm: "RS256",
                            },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    success: true,
                                    token: "Bearer "+ token,
                                })
                            }    
                            );
                    }
                )
            }
        });
    });
};