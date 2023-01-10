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
    document.getElementById("but").style.visibility = 'visible'
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
    clear()
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
}