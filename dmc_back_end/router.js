const { response } = require('express')
const express = require('express')
const connection = require('./database')
const router = new express.Router()
const message = "drugs is gucci"

router.get('/', (req, res) => {
    // buatlah perintah untuk mengirimkan response berupa Nama - NIM
    res.send(message)
})

router.get('/getAllPlanes', (req, res) => {
    // buatlah perintah untuk mengambil semua data pada table mahasiswa, jika berhasil mengirimkan status 200 dan gagal status 500
    connection.query('SELECT * FROM pesawat', (error, rows) => {
    
        if (error) {
            console.log(error);
            res.status = 500;
        } else {
            console.log("miomio");
            res.status(200).send({data:rows});
        }
    });
})

router.get('/getMahasiswa/:id', (req, res) => {
    const id = req.params.id
    // buatlah perintah untuk mengambil data berdasarkan id pada table mahasiswa, jika berhasil mengirimkan response 200 dan gagal status 500
    connection.query('SELECT * FROM mahasiswa', (error, rows) => {
    
        if (error) {
            console.log(error);
            response.status = 500;
        } else {
            console.log("miomio");
            res.status(200).send({data:rows});
        }
    });
})

router.post('/insertMahasiswa', (req, res) => {
    const nama = req.body.nama
    const nim = req.body.nim
    const jurusan = req.body.jurusan

    connection.query( 'INSERT INTO mahasiswa (id, nim, nama, jurusan) values(id,?,?,?)' , 
        [nim, nama, jurusan], 
        (error, rows, fields) => {
            if (error) {
                console.log(error);
                response.status = 500;
            } else {
                console.log("miomio");
                res.status(200).send({data:rows});
            }
    })
})

router.post('/updateMahasiswa/:id', (req, res) => {
    const id = req.params.id
    const nama = req.body.nama
    const nim = req.body.nim
    const jurusan = req.body.jurusan
    
    // buatlah perintah untuk mengupdate nama, email, dan jurusan berdasarkan id pada table mahasiswa jika berhasil status 200 dan gagal 400
    
})

router.post('/deleteMahasiswa/:id', (req, res) => {
    const id = req.params.id
    
    // buatlah perintah untuk menghapus data berdasarkan id pada table mahasiswa jika berhasil status 200 dan gagal status 500
    
})

module.exports = router