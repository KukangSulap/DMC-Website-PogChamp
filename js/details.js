const baseURL = "http://localhost:3000"

function cariPlane() {

  $.getJSON(baseURL + "/getOnePlanes", (data) => {
      data.data.forEach(function(value) {
        const taxCal = value.harga_pesawat * 0.01
        const total = value.harga_pesawat - taxCal

          document.getElementById("nama_travel").value = value.nama_pesawat
          document.getElementById("kota_asal").value = value.asal_pesawat
          document.getElementById("kota_tujuan").value = value.tujuan_pesawat
          document.getElementById("tgl").value = value.jam_terbang
          document.getElementById("total1").innerHTML = "Rp. " + value.harga_pesawat
          document.getElementById("tax").innerHTML = "Rp. " + taxCal
          document.getElementById("totalHasil").innerHTML = "Rp. " + total         
      })
  })

}

window.onload = cariPlane()
