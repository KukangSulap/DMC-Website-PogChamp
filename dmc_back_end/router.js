const { response } = require('express')
const express = require('express')
const connection = require('./database')
const router = new express.Router()
const message = "drugs is gucci"

const pars = require("body-parser")
const encoder = pars.urlencoded({ extended: true })

router.get('/', (req, res) => {
    res.sendFile("index.html", {root: "../"});
})

router.get('/getAllPlanes', (req, res) => {
    // buatlah perintah untuk mengambil semua data pada table mahasiswa, jika berhasil mengirimkan status 200 dan gagal status 500
    connection.query('SELECT * FROM pesawat', (error, rows) => {
    
        if (error) {
            console.log(error);
            res.status = 500;
        } else {
            console.log("miomio");
        }
    });
})

router.post('/',  encoder, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection.query('SELECT email, password FROM user WHERE email = ? AND password = ?', [email, password], (error, result, fields) => {
        if (result.length > 0) {
            res.redirect('/homeActivity')
        } else {
            res.redirect('/')
        }
        res.end();
    })
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

router.post('/register',  encoder, (req, res) => {
    const nama = req.body.nama
    const email = req.body.email;
    const password = req.body.password;
    connection.query('INSERT INTO user (nama, email, password) values (?, ?, ?)', [nama, email, password], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/homeActivity')
        }
        res.end();
    })
})

// router.post('/insertMahasiswa', (req, res) => {
//     const nama = req.body.nama
//     const nim = req.body.nim
//     const jurusan = req.body.jurusan

//     // buatlah perintah untuk menambahkan nama, nim, dan jurusan pada table mahasiswa jika berhasil status 200 dan gagal status 400
//     connection.query('INSERT INTO mahasiswa values (?,?,?,?)', [0, nama, nim, jurusan] , (error, rows) => {
//         if (error) {
//             console.log(error)
//         } else {
//             res.status(200).json({message:"", data:rows})
//         }
//     })
// })

// router.post('/updateMahasiswa/:id', (req, res) => {
//     const id = req.params.id
//     const nama = req.body.nama
//     const nim = req.body.nim
//     const jurusan = req.body.jurusan
    
//     // buatlah perintah untuk mengupdate nama, email, dan jurusan berdasarkan id pada table mahasiswa jika berhasil status 200 dan gagal 400
//     connection.query('UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id = ?', [nim, nama, jurusan, id] , (error, rows) => {
//         if (error) {
//             console.log(error)
//         } else {
//             res.status(200).json({message:"", data:rows})
//         }
//     })
// })

// router.post('/deleteMahasiswa/:id', (req, res) => {
//     const id = req.params.id
    
//     // buatlah perintah untuk menghapus data berdasarkan id pada table mahasiswa jika berhasil status 200 dan gagal status 500
//     connection.query('DELETE FROM mahasiswa WHERE id = ?', id , (error, rows) => {
//         if (error) {
//             console.log(error)
//         } else {
//             res.status(200).json({message:"", data:rows})
//         }
//     })
// })

module.exports = router