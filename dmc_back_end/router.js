const { response } = require('express')
const express = require('express')
const connection = require('./database')
const LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch');
const router = new express.Router()
const message = "drugs is gucci"

const pars = require("body-parser")
const encoder = pars.urlencoded({ extended: true })

//Membuka Setiap Page
router.get('/', (req, res) => {
    res.sendFile("index.html", {root: "../"});  
})

router.get('/homeAdmin', (req, res) => {
    res.sendFile("homeAdmin.html", {root: "../"})
})

router.get('/homeActivity', (req, res) => {
    res.sendFile("homeActivity.html", {root: "../"})
})

router.get('/index.html', (req, res) => {
    res.redirect('/')
})

router.get('/register', (req, res) => {
    res.sendFile('indexReg.html', {root: '../'})
})

router.get('/myAccount', (req, res) => {
    res.sendFile('myAccount.html', {root: '../'})
})

router.get('/pencarianPesawat', (req, res) => {
    res.sendFile('pencarianPesawat.html', {root: '../'})
})

router.get('/tiketPesawat', (req, res) => {
    res.sendFile('tiketPesawat.html', {root: '../'})
})

router.get('/detailPemesanan', (req, res) => {
    res.sendFile('detailPemesanan.html', {root: '../'})
})
// End

// User

router.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    if (id == '`'){
        connection.query('SELECT * FROM user' , (error, rows) => {
            if (error) {
                console.log(error);
                res.status = 300;
            } else {
                console.log("get User Found");
                res.status(200).send({data:rows})
            }
        });
    }else {
        connection.query('SELECT * FROM user where id = ?', id , (error, rows) => {
            if (error) {
                console.log(error);
                res.status = 300;
            } else {
                console.log("get User Found");
                res.status(200).send({data:rows})
            }
        });
    }    
})

router.get('/getAllUser', (req, res) => {
    connection.query('SELECT * FROM user', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("miomio");
            res.status(200).send({data:rows})
        }
    });
})

router.post('/insertUser', encoder, (req, res) => {
    const nama = req.body.nama
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    connection.query('INSERT INTO user (id, email, password, nama, role) VALUES ((SELECT MAX(id) FROM user u) + 1, ?,?,?,?)', [email, password, nama, role], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Success")
        }
        res.end()
    })
})

router.post('/updateUser', encoder, (req, res) => {
    const id = req.body.id
    const nama = req.body.nama
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    connection.query('UPDATE user SET email = ?, password = ?, nama = ?, role = ? WHERE id = ?', [email, password, nama, role, id], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Success")
        }
        res.end()
    })
})

router.post('/deleteUser', encoder, (req, res) => {
    const id = req.body.id

    connection.query('DELETE FROM user WHERE id = ?', [id], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Success")
        }
        res.end()
    })
})

// End User

router.get('/getAllPlanes', (req, res) => {
    connection.query('SELECT * FROM pesawat', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get Pesawat Found");
            res.status(200).send({data:rows})
        }
    });
})

router.get('/getOnePlanes', (req, res) => {
    connection.query('SELECT * FROM pesawat where id_pesawat = 1', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get Pesawat Found");
            res.status(200).send({data:rows})
        }
    });
})


router.post('/',  encoder, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection.query('SELECT nama, email, password, role FROM user WHERE email = ? AND password = ?', [email, password], (error, result, fields) => {
        if (result.length > 0) {
            if (result[0]['role'] == 'admin'){
                res.redirect('/homeAdmin')
            } else if (result[0]['role'] == 'user') {
                res.redirect('/homeActivity')
            }
        } else {
            res.redirect('/')
        }
        res.end();
    })
})

router.post('/register',  encoder, (req, res) => {
    const nama = req.body.nama
    const email = req.body.email;
    const password = req.body.password;
    connection.query('INSERT INTO user (nama, email, password, role) values (?, ?, ?, "user")', [nama, email, password], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/homeActivity')
        }
        res.end();
    })
})

module.exports = router