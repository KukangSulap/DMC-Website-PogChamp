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
    res.sendFile("index.html", {root: "./"});  
})

router.get('/homeAdmin', (req, res) => {
    res.sendFile("homeAdmin.html", {root: "./"})
})

router.get('/homeActivity', (req, res) => {
    res.sendFile("homeActivity.html", {root: "./"})
})

router.get('/index.html', (req, res) => {
    res.redirect('/')
})

router.get('/register', (req, res) => {
    res.sendFile('indexReg.html', {root: './'})
})

router.get('/myAccount', (req, res) => {
    res.sendFile('myAccount.html', {root: './'})
})

router.get('/pencarianPesawat', (req, res) => {
    res.sendFile('pencarianPesawat.html', {root: './'})
})

router.get('/tiketPesawat', (req, res) => {
    res.sendFile('tiketPesawat.html', {root: './'})
})

router.get('/tiketKereta', (req, res) => {
    res.sendFile('tiketKereta.html', {root: './'})
})

router.get('/tiketTravel', (req, res) => {
    res.sendFile('tiketTravel.html', {root: './'})
})

router.get('/detailPemesanan', (req, res) => {
    res.sendFile('detailPemesanan.html', {root: './'})
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
    const namad = req.body.nama
    const namab = req.body.nama_belakang
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    connection.query('INSERT INTO user (id, email, password, nama, nama_belakang, role) VALUES ((SELECT MAX(id) FROM user u) + 1, ?,?,?,?,?)', [email, password, namad, namab, role], (error, result, fields) => {
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
    const namad = req.body.nama
    const namab = req.body.nama_belakang
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    connection.query('UPDATE user SET email = ?, password = ?, nama = ?, nama_belakang role = ? WHERE id = ?', [email, password, namad, namab, role, id], (error, result, fields) => {
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

//Plane

router.get('/getAllPlanes', (req, res) => {
    connection.query('SELECT * FROM pesawat', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get Pesawat Found");
            res.status(200).send({data:rows})
        }
    })
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

router.get('/getPlane/:nama_pesawat', encoder, (req, res) => {
    const nama_pesawat = req.params.nama_pesawat
    if (nama_pesawat == '`'){
        connection.query('SELECT * FROM pesawat' , (error, rows) => {
            if (error) {
                console.log(error);
                res.status = 300;
            } else {
                console.log("get plane Found");
                res.status(200).send({data:rows})
            }
        })
    }else {
        connection.query('SELECT * FROM pesawat WHERE nama_pesawat = ?', [nama_pesawat] , (error, rows) => {
            if (error) {
                console.log("get plane error");
            } else {
                console.log("get plane Found");
                res.status(200).send({data:rows})
            }
        });
    }    
})


router.post('/insertPlane', encoder, (req, res) => {
    const nama_pesawat = req.body.w
    const harga_pesawat = req.body.e
    const jam_terbang = req.body.r
    const asal_pesawat = req.body.t
    const icon_pesawat = req.body.u
    const bg_pesawat = req.body.i
    connection.query('INSERT INTO pesawat (id_pesawat, nama_pesawat, harga_pesawat, jam_terbang, asal_pesawat, tujuan_pesawat, icon_pesawat, bg_pesawat) VALUES ((SELECT MAX(id_pesawat) FROM pesawat p) + 1, ?,?,?,?,?,?,?)', 
        [nama_pesawat, harga_pesawat, jam_terbang, asal_pesawat, tujuan_pesawat, icon_pesawat, bg_pesawat], 
        (error, result, fields) => {
            if (error) {
                console.log(error)
            } else {
                console.log("plane inserted")
            }
            res.end()
        })
})

router.post('/updatePlane', encoder, (req, res) => {
    const id_pesawat = req.body.q
    const nama_pesawat = req.body.w
    const harga_pesawat = req.body.e
    const jam_terbang = req.body.r
    const asal_pesawat = req.body.t
    const tujuan_pesawat = req.body.y
    const icon_pesawat = req.body.u
    const bg_pesawat = req.body.i
    connection.query('UPDATE pesawat SET nama_pesawat = ?, harga_pesawat = ?, jam_terbang = ?, asal_pesawat = ?, tujuan_pesawat = ?, icon_pesawat = ?, bg_pesawat = ? WHERE id_pesawat = ?', 
        [nama_pesawat, harga_pesawat, jam_terbang, asal_pesawat, tujuan_pesawat, icon_pesawat, bg_pesawat, id_pesawat], 
        (error, result, fields) => {
            if (error) {
                console.log(error)
            } else {
                console.log("plane updated")
            }
            res.end()
        })
})

router.post('/deletePlane', encoder, (req, res) => {
    const id_pesawat = req.body.id_pesawat

    connection.query('DELETE FROM pesawat WHERE id_pesawat = ?', [id_pesawat], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            console.log("plane deleted")
        }
        res.end()
    })
})

//End Plane

//Train

router.get('/getAllTrains', (req, res) => {
    connection.query('SELECT * FROM kereta', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get kereta Found");
            res.status(200).send({data:rows})
        }
    })
})

router.get('/getOneTrains', (req, res) => {
    connection.query('SELECT * FROM kereta where id_kereta = 1', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get kereta Found");
            res.status(200).send({data:rows})
        }
    });
})

router.get('/getTrain/:id_kereta', (req, res) => {
    const id_kereta = req.params.id_kereta
    if (id_kereta == '`'){
        connection.query('SELECT * FROM kereta' , (error, rows) => {
            if (error) {
                console.log(error);
                res.status = 300;
            } else {
                console.log("get Train Found");
                res.status(200).send({data:rows})
            }
        })
    }else {
        connection.query('SELECT * FROM `kereta` WHERE nama_kereta LIKE "%?%"', id_kereta , (error, rows) => {
            if (error) {
                console.log(error);
                res.status = 300;
            } else {
                console.log("get Train Found");
                res.status(200).send({data:rows})
            }
        });
    }    
})


router.post('/insertTrain', encoder, (req, res) => {
    const nama_kereta = req.body.w
    const harga_kereta = req.body.e
    const jam_terbang = req.body.r
    const asal_kereta = req.body.t
    const icon_kereta = req.body.u
    const bg_kereta = req.body.i
    connection.query('INSERT INTO kereta (id_kereta, nama_kereta, harga_kereta, jam_terbang, asal_kereta, tujuan_kereta, icon_kereta, bg_kereta) VALUES ((SELECT MAX(id_kereta) FROM kereta p) + 1, ?,?,?,?,?,?,?)', 
        [nama_kereta, harga_kereta, jam_terbang, asal_kereta, tujuan_kereta, icon_kereta, bg_kereta], 
        (error, result, fields) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Train inserted")
            }
            res.end()
        })
})

router.post('/updateTrain', encoder, (req, res) => {
    const id_kereta = req.body.q
    const nama_kereta = req.body.w
    const harga_tiket_kereta = req.body.e
    const waktu_perjalanan = req.body.r
    const asal_kereta = req.body.t
    const tujuan_kereta = req.body.y
    const icon_kereta = req.body.u
    const bg_kereta = req.body.i
    connection.query('UPDATE kereta SET nama_kereta = ?, harga_kereta = ?, jam_terbang = ?, asal_kereta = ?, tujuan_kereta = ?, icon_kereta = ?, bg_kereta = ? WHERE id_kereta = ?', 
        [nama_kereta, harga_tiket_kereta, waktu_perjalanan, asal_kereta, tujuan_kereta, icon_kereta, bg_kereta, id_kereta], 
        (error, result, fields) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Train updated")
            }
            res.end()
        })
})

router.post('/deleteTrain', encoder, (req, res) => {
    const id_kereta = req.body.id_kereta

    connection.query('DELETE FROM kereta WHERE id_kereta = ?', [id_kereta], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Train deleted")
        }
        res.end()
    })
})

//End Train

// Travel

router.get('/getAllTravels', (req, res) => {
    connection.query('SELECT * FROM travel', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get travel Found");
            res.status(200).send({data:rows})
        }
    })
})

router.get('/getOneTravels', (req, res) => {
    connection.query('SELECT * FROM travel where id_travel = 1', (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get travel Found");
            res.status(200).send({data:rows})
        }
    });
})

router.get('/getTravel/:id_travel', (req, res) => {
    const id_travel = req.params.id_travel
    if (id_travel == '`'){
        connection.query('SELECT * FROM travel' , (error, rows) => {
            if (error) {
                console.log(error);
                res.status = 300;
            } else {
                console.log("get Travel Found");
                res.status(200).send({data:rows})
            }
        })
    }else {
        connection.query('SELECT * FROM `travel` WHERE nama_travel LIKE "%?%"', id_travel , (error, rows) => {
            if (error) {
                console.log(error);
                res.status = 300;
            } else {
                console.log("get Travel Found");
                res.status(200).send({data:rows})
            }
        });
    }    
})


router.post('/insertTravel', encoder, (req, res) => {
    const nama_travel = req.body.w
    const harga_travel = req.body.e
    const jam_terbang = req.body.r
    const asal_travel = req.body.t
    const icon_travel = req.body.u
    const bg_travel = req.body.i
    connection.query('INSERT INTO travel (id_travel, nama_travel, harga_travel, jam_terbang, asal_travel, tujuan_travel, icon_travel, bg_travel) VALUES ((SELECT MAX(id_travel) FROM travel p) + 1, ?,?,?,?,?,?,?)', 
        [nama_travel, harga_travel, jam_terbang, asal_travel, tujuan_travel, icon_travel, bg_travel], 
        (error, result, fields) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Travel inserted")
            }
            res.end()
        })
})

router.post('/updateTravel', encoder, (req, res) => {
    const id_travel = req.body.q
    const nama_travel = req.body.w
    const harga_tiket_travel = req.body.e
    const waktu_perjalanan = req.body.r
    const asal_travel = req.body.t
    const tujuan_travel = req.body.y
    const icon_travel = req.body.u
    const bg_travel = req.body.i
    connection.query('UPDATE travel SET nama_travel = ?, harga_travel = ?, jam_terbang = ?, asal_travel = ?, tujuan_travel = ?, icon_travel = ?, bg_travel = ? WHERE id_travel = ?', 
        [nama_travel, harga_tiket_travel, waktu_perjalanan, asal_travel, tujuan_travel, icon_travel, bg_travel, id_travel], 
        (error, result, fields) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Travel updated")
            }
            res.end()
        })
})

router.post('/deleteTravel', encoder, (req, res) => {
    const id_travel = req.body.id_travel

    connection.query('DELETE FROM travel WHERE id_travel = ?', [id_travel], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Travel deleted")
        }
        res.end()
    })
})

//End Train

//Login

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

//register

router.post('/register',  encoder, (req, res) => {
    const nama = req.body.nama
    const namab = req.body.nama_belakang
    const email = req.body.email;
    const password = req.body.password;
    connection.query('INSERT INTO user (id, nama, nama_belakang, email, password, role) values ((SELECT MAX(id) FROM user u) + 1,?,?,?,?, "user")', [nama, namab, email, password], (error, result, fields) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/')
        }
        res.end();
    })
})

//Profile

router.get('/getProfile1:email', encoder, (req, res) => {
    const email = req.params.email
    
    connection.query('SELECT email, nama, nama_belakang FROM user where email = ?', [email], (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get User Found");
            res.status(200).send({load:rows})
        }
    });
})

router.get('/getProfile2:email', encoder, (req, res) => {
    const email = req.params.email

    connection.query('SELECT * FROM profile where email = ?', [email], (error, rows) => {
        if (error) {
            console.log(error);
            res.status = 300;
        } else {
            console.log("get User Found");
            res.status(200).send({data:rows})
        }
    });
})

router.post('/updateProfile', encoder, (req, res) => {
    const email = req.body.email    
    const fN = req.body.fN
    const lN = req.body.lN
    const address = req.body.address
    const no_hp = req.body.no_hp
    const image = req.body.image

    connection.query('SELECT * FROM profile WHERE email = ?', [email], (error, result, fields) =>{
        if (!result.length) {
            connection.query('INSERT INTO profile (email, first_name, last_name, address, no_hp, image) VALUES (?, ?, ?, ?, ?, "")', [email, fN, lN, address, no_hp], (error, result, fields) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log("Berhasil update profile")
                    res.jsonp({success : true})
                }
                res.end()
            })
        } else {
            connection.query('UPDATE profile SET first_name = ?, last_name = ?, address = ?, no_hp = ?, image = "" WHERE email = ?', [fN, lN, address, no_hp, email], (error, result, fields) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log("Berhasil update profile")
                    res.jsonp({success : true})
                }
                res.end()
            })
        }
    })
})

module.exports = router