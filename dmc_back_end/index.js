// import express dengan menggunkan konstanta express = require('express')
const express = require('express')
// import file router dengan konstanta router
const router = require('./router')

const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use("/js", express.static("../assets/js"))
app.use("/css", express.static("../assets/css"))
app.use("/js", express.static("../js"))
app.use("/css", express.static("../css"))

app.use(cors({origin: 'null'}))
app.use(express.json())
app.use(router)

app.listen(port, () => {
    // Buat perintah supaya muncul pesan bahwa server sudah berjalan di port yang sudah ditentukan sebelumnya
    console.log("udh ke run btw, port: " + port)
    
})