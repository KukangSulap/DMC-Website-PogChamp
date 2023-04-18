const baseURL = "http://localhost:3000"

// User

function get_required_user() {
    $.getJSON(baseURL + "/getAllUser", (data) => {
        clear()
        display = "<table class='mt-4 table'><thead><tr><th>ID User</th><th>Nama Depan</th><th>Nama Belakang</th><th>Email</th><th>Password</th><th>Role</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id + "</td>" +
                "<td>" + value.nama + "</td>" +
                "<td>" + value.nama_belakang + "</td>" +
                "<td>" + value.email + "</td>" +
                "<td>" + value.password + "</td>" +
                "<td>" + value.role + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("but").style.display = 'inline'
    document.getElementById("planeManagement").style.display = 'none'
    document.getElementById("trainManagement").style.display = 'none'
    document.getElementById("travelManagement").style.display = 'none'

}

function findUser() {
    var id = document.getElementById("findUser").value

    $.getJSON(baseURL + "/getUser/" + id, (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID User</th><th>Nama Depan</th><th>Nama Beelakang</th><th>Email</th><th>Password</th><th>Role</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id + "</td>" +
                "<td>" + value.nama + "</td>" +
                "<td>" + value.nama_belakang + "</td>" +
                "<td>" + value.email + "</td>" +
                "<td>" + value.password + "</td>" +
                "<td>" + value.role + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("findUser").value = ""
}

function cariUser() {
    var id = document.getElementById("id_update").value

    $.getJSON(baseURL + "/getUser/" + id, (data) => {
        data.data.forEach(function (value) {
            document.getElementById("namadUser_update").value = value.nama
            document.getElementById("namabUser_update").value = value.nama_belakang
            document.getElementById("email_update").value = value.email
            document.getElementById("password_update").value = value.password
            document.getElementById("role_update").value = value.role
        })
    })
}

function insertUser() {
    const data = {}
    data.nama = document.getElementById("namadUser_insert").value
    data.nama_belakang = document.getElementById("namabUser_insert").value
    data.email = document.getElementById("email_insert").value
    data.password = document.getElementById("password_insert").value
    data.role = document.getElementById("role_insert").value

    $.ajax({
        type: "POST",
        url: baseURL + "/insertUser",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_user()
}

function updateUser() {
    const data = {}
    data.id = document.getElementById("id_update").value
    data.nama = document.getElementById("namadUser_update").value
    data.nama_belakang = document.getElementById("namabUser_update").value
    data.email = document.getElementById("email_update").value
    data.password = document.getElementById("password_update").value
    data.role = document.getElementById("role_update").value

    $.ajax({
        type: "POST",
        url: baseURL + "/updateUser",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_user()
}

function deleteUser() {
    const data = {}
    data.id = document.getElementById("id_delete").value
    $.ajax({
        type: "POST",
        url: baseURL + "/deleteUser",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_user()
}

// End User

// Pesawat

function get_required_plane() {
    clearPlane()
    $.getJSON(baseURL + "/getAllPlanes", (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID Pesawat</th><th>Nama Pesawat</th><th>Harga</th><th>Boarding Time</th><th>Asal</th><th>Tiba</th><th>No Tempat Duduk</th><th>Gate</th><th>Icon Pesawat</th><th>Background Pesawat</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id_pesawat + "</td>" +
                "<td>" + value.nama_pesawat + "</td>" +
                "<td>" + value.harga_pesawat + "</td>" +
                "<td>" + value.jam_terbang + "</td>" +
                "<td>" + value.asal_pesawat + "</td>" +
                "<td>" + value.tujuan_pesawat + "</td>" +
                "<td>" + value.no_duduk + "</td>" +
                "<td>" + value.gate + "</td>" +
                "<td>" + value.icon_pesawat + "</td>" +
                "<td>" + value.bg_pesawat + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("but").style.display = 'none'
    document.getElementById("planeManagement").style.display = 'inline'
    document.getElementById("trainManagement").style.display = 'none'
    document.getElementById("travelManagement").style.display = 'none'


}

function findPlane() {
    var id_pesawat = document.getElementById("findPlane").value

    $.getJSON(baseURL + "/getPlane/" + id_pesawat, (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID Pesawat</th><th>Nama Pesawat</th><th>Harga</th><th>Jam Terbang</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id_pesawat + "</td>" +
                "<td>" + value.nama_pesawat + "</td>" +
                "<td>" + value.harga_pesawat + "</td>" +
                "<td>" + value.jam_terbang + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("findPlaneID").value = ""
}

function insertPlane() {
    const data = {}
    data.w = document.getElementById("nama_pesawat_insert").value
    data.e = document.getElementById("harga_insert").value
    data.r = document.getElementById("jam_terbang_insert").value
    data.t = document.getElementById("asal_insert").value
    data.y = document.getElementById("tujuan_insert").value
    data.u = document.getElementById("icon_insert").value
    data.i = document.getElementById("bg_pesawat_insert").value

    $.ajax({
        type: "POST",
        url: baseURL + "/insertPlane",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_plane()
}

function updatePlane() {
    const data = {}
    data.q = document.getElementById("id_pesawat_update").value
    data.w = document.getElementById("nama_pesawat_update").value
    data.e = document.getElementById("harga_update").value
    data.r = document.getElementById("jam_terbang_update").value
    data.t = document.getElementById("asal_update").value
    data.y = document.getElementById("tujuan_update").value
    data.u = document.getElementById("icon_update").value
    data.i = document.getElementById("bg_pesawat_update").value

    $.ajax({
        type: "POST",
        url: baseURL + "/updatePlane",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_plane()
}


function deletePlane() {
    const data = {}
    data.id_pesawat = document.getElementById("id_plane_delete").value
    $.ajax({
        type: "POST",
        url: baseURL + "/deletePlane",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_plane()
}

// Kereta

function get_required_train() {
    clearTrain()
    $.getJSON(baseURL + "/getAllTrains", (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID Kereta</th><th>Nama Kereta</th><th>Harga</th><th>Waktu Berangkat</th><th>Waktu Tiba</th><th>No Tempat Duduk</th><th>Icon Kereta</th><th>Background Kereta</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id_kereta + "</td>" +
                "<td>" + value.nama_kereta + "</td>" +
                "<td>" + value.harga_tiket_kereta + "</td>" +
                "<td>" + value.berangkat_kereta + "</td>" +
                "<td>" + value.tiba_kereta + "</td>" +
                "<td>" + value.no_duduk + "</td>" +
                "<td>" + value.icon_kereta + "</td>" +
                "<td>" + value.bg_kereta + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("but").style.display = 'none'
    document.getElementById("planeManagement").style.display = 'none'
    document.getElementById("trainManagement").style.display = 'inline'
    document.getElementById("travelManagement").style.display = 'none'
}

function findTrain() {
    var id_kereta = document.getElementById("findTrain").value

    $.getJSON(baseURL + "/getTrain/" + id_kereta, (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID Kereta</th><th>Nama Kereta</th><th>Harga</th><th>Jam Terbang</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id_kereta + "</td>" +
                "<td>" + value.nama_kereta + "</td>" +
                "<td>" + value.harga_kereta + "</td>" +
                "<td>" + value.jam_berangkat + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("findTrainID").value = ""
}

function insertTrain() {
    const data = {}
    data.w = document.getElementById("nama_kereta_insert").value
    data.e = document.getElementById("harga_insert").value
    data.r = document.getElementById("jam_berangkat_insert").value
    data.t = document.getElementById("asal_insert").value
    data.y = document.getElementById("tujuan_insert").value
    data.u = document.getElementById("icon_insert").value
    data.i = document.getElementById("bg_kereta_insert").value

    $.ajax({
        type: "POST",
        url: baseURL + "/insertTrain",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_train()
}

function updateTrain() {
    const data = {}
    data.q = document.getElementById("id_kereta_update").value
    data.w = document.getElementById("nama_kereta_update").value
    data.e = document.getElementById("harga_update").value
    data.r = document.getElementById("jam_berangkat_update").value
    data.t = document.getElementById("asal_update").value
    data.y = document.getElementById("tujuan_update").value
    data.u = document.getElementById("icon_update").value
    data.i = document.getElementById("bg_kereta_update").value

    $.ajax({
        type: "POST",
        url: baseURL + "/updateTrain",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_train()
}


function deleteTrain() {
    const data = {}
    data.id_kereta = document.getElementById("id_train_delete").value
    $.ajax({
        type: "POST",
        url: baseURL + "/deleteTrain",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_train()
}

// Travel

function get_required_travel() {
    clearTravel()
    $.getJSON(baseURL + "/getAllTravels", (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID Travel</th><th>Nama Travel</th><th>Harga</th><th>No Tempat Duduk</th><th>Waktu Berangkat</th><th>Waktu Tiba</th><th>Icon Travel</th><th>Background Travel</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id_travel + "</td>" +
                "<td>" + value.nama_travel + "</td>" +
                "<td>" + value.harga_travel + "</td>" +
                "<td>" + value.no_duduk + "</td>" +
                "<td>" + value.waktu_berangkat + "</td>" +
                "<td>" + value.waktu_tiba + "</td>" +
                "<td>" + value.icon_travel + "</td>" +
                "<td>" + value.bg_travel + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("but").style.display = 'none'
    document.getElementById("planeManagement").style.display = 'none'
    document.getElementById("trainManagement").style.display = 'none'
    document.getElementById("travelManagement").style.display = 'inline'
}

function findTravel() {
    var id_travel = document.getElementById("findTravel").value

    $.getJSON(baseURL + "/getTravel/" + id_travel, (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID Travel</th><th>Nama Travel</th><th>Harga</th><th>Jam Terbang</th></tr></thead><tbody>"
        data.data.forEach(function (value) {
            display = display + "<tr><td>" + value.id_travel + "</td>" +
                "<td>" + value.nama_travel + "</td>" +
                "<td>" + value.harga_travel + "</td>" +
                "<td>" + value.jam_berangkat + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("findTravelID").value = ""
}

function insertTravel() {
    const data = {}
    data.w = document.getElementById("nama_travel_insert").value
    data.e = document.getElementById("harga_insert").value
    data.r = document.getElementById("jam_berangkat_insert").value
    data.t = document.getElementById("asal_insert").value
    data.y = document.getElementById("tujuan_insert").value
    data.u = document.getElementById("icon_insert").value
    data.i = document.getElementById("bg_travel_insert").value

    $.ajax({
        type: "POST",
        url: baseURL + "/insertTravel",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_travel()
}

function updateTravel() {
    const data = {}
    data.q = document.getElementById("id_travel_update").value
    data.w = document.getElementById("nama_travel_update").value
    data.e = document.getElementById("harga_update").value
    data.r = document.getElementById("jam_berangkat_update").value
    data.t = document.getElementById("asal_update").value
    data.y = document.getElementById("tujuan_update").value
    data.u = document.getElementById("icon_update").value
    data.i = document.getElementById("bg_travel_update").value

    $.ajax({
        type: "POST",
        url: baseURL + "/updateTravel",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_travel()
}

function deleteTravel() {
    const data = {}
    data.id_kereta = document.getElementById("id_travel_delete").value
    $.ajax({
        type: "POST",
        url: baseURL + "/deleteTravel",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
    get_required_travel()
}