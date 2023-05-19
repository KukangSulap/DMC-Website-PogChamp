const baseURL = "http://localhost:3000"

function ambilData() {
    document.getElementById("email").value = localStorage.email
    var email = document.getElementById("email").value
    
    $.getJSON(baseURL + "/getProfile1" + email, (load) => {
        load.load.forEach(function (value) {
            document.getElementById("fN").value = value.nama
            document.getElementById("lN").value = value.nama_belakang
        })
    })

    $.getJSON(baseURL + "/getProfile2" + email, (data) => {
        data.data.forEach(function (value) {
            document.getElementById("address").value = value.address
            document.getElementById("no_hp").value = value.no_hp
        })
    })
}

function updateProfile() {
    let firstName = document.getElementById("fN").value
    let lastName = document.getElementById("lN").value
    let address = document.getElementById("address").value
    let no_hp = document.getElementById("no_hp").value
    if (firstName == "-" || lastName == "-" || address == "-" || no_hp == "-" || firstName == "" || lastName == "" || address == "" || no_hp == "") {
        alert("Data masih ada yang kosong !!")
    } else if (isNaN(no_hp)) {
        alert("Nomor Handphone tidak boleh huruf")
    } else {
        const data = {}
        data.email = document.getElementById("email").value
        data.fN = document.getElementById("fN").value
        data.lN = document.getElementById("lN").value
        data.address = document.getElementById("address").value
        data.no_hp = document.getElementById("no_hp").value

        $.ajax({
            type: "POST",
            url: baseURL + "/updateProfile",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if(data['success']){
                    alert("Data berhasil diUpdate")
                    location.reload()
                }
            }
        })

        data.email = document.getElementById("email").value
        data.nama = document.getElementById("fN").value
        data.nama_belakang = document.getElementById("lN").value

        $.ajax({
            type: "POST",
            url: baseURL + "/updateUserProfile",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if(data['success']){
                    alert("Data Profile berhasil diUpdate")
                    location.reload()
                }
            }
        })
    }
}

window.onload = ambilData
