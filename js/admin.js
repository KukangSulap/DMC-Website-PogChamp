const baseURL = "http://localhost:3000"

// User

function get_required_user() {
    $.getJSON(baseURL + "/getAllUser", (data) => {
        clear()
        display = "<table class='mt-4 table'><thead><tr><th>ID User</th><th>Nama User</th><th>Email</th><th>Password</th><th>Role</th></tr></thead><tbody>"
        data.data.forEach(function(value) {
            display = display + "<tr><td>" + value.id + "</td>" +
                "<td>" + value.nama + "</td>" +
                "<td>" + value.email + "</td>" +
                "<td>" + value.password + "</td>" +
                "<td>" + value.role + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("but").style.display = 'inline'
    document.getElementById("planeManagement").style.display = 'none'
}

function findUser() {
    var id = document.getElementById("findUser").value

    $.getJSON(baseURL + "/getUser/" + id, (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID User</th><th>Nama User</th><th>Email</th><th>Password</th><th>Role</th></tr></thead><tbody>"
        data.data.forEach(function(value) {
            display = display + "<tr><td>" + value.id + "</td>" +
                "<td>" + value.nama + "</td>" +
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
        data.data.forEach(function(value) {
            document.getElementById("namaUser_update").value = value.nama
            document.getElementById("email_update").value = value.email
            document.getElementById("password_update").value = value.password
            document.getElementById("role_update").value = value.role
        })
    })
}

function insertUser() {
    const data = {}
    data.nama = document.getElementById("namaUser_insert").value
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
    data.nama = document.getElementById("namaUser_update").value
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
        display = "<table class='mt-4 table'><thead><tr><th>ID Pesawat</th><th>Nama Pesawat</th><th>Harga</th><th>Jam Terbang</th></tr></thead><tbody>"
        data.data.forEach(function(value) {
            display = display + "<tr><td>" + value.id_pesawat + "</td>" +
                "<td>" + value.nama_pesawat + "</td>" +
                "<td>" + value.harga_pesawat + "</td>" +
                "<td>" + value.jam_terbang + "</td></tr>"
        })

        display = display + "</tbody></table></div>"
        document.getElementById("list").innerHTML = display
    })
    document.getElementById("but").style.display = 'none'
    document.getElementById("planeManagement").style.display = 'inline'
}

function findPlane() {
    var id_pesawat = document.getElementById("findPlane").value

    $.getJSON(baseURL + "/getPlane/" + id_pesawat, (data) => {
        display = "<table class='mt-4 table'><thead><tr><th>ID Pesawat</th><th>Nama Pesawat</th><th>Harga</th><th>Jam Terbang</th></tr></thead><tbody>"
        data.data.forEach(function(value) {
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
