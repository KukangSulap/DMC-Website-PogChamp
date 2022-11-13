$(document).ready(function(){

  // jQuery methods go here...
  $.getJSON("js/details.json", function(data){
      $("#name").val(data.detail[0].name);
      $("#jns_travel").val(data.detail[0].jns_travel);
      $("#nama_travel").val(data.detail[0].nama_travel);
      $("#kota_asal").val(data.detail[0].kota_asal);
      $("#kota_tujuan").val(data.detail[0].kota_tujuan);
      $("#tgl").val(data.detail[0].tgl);
      $("#jml_pen").val(data.detail[0].jml_pen);
  });
});