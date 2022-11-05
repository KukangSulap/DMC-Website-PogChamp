function clear(){
		document.getElementById("email").value = ""
		document.getElementById("password").value = ""
}

function Check(e) {
			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value;
			// Menanyakan apakah yang dimasukan benar?
			if (confirm("Apakah Email dan Password yang dimasukan benar ?")){
				if (email == "admin" && password == "123"){
					return true;
				}else{
					alert("Email atau Password salah");
					clear();
					return false;
				}
			}else{
				clear();
				return false;
			}
		}