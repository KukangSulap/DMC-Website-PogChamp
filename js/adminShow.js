function none() {
    display = ""
    document.getElementById("list").innerHTML = display
    document.getElementById("but").style.visibility = 'hidden'
}
// User
function clear() {
    document.getElementById("find").style.display = "none"
    document.getElementById("insert").style.display = "none"
    document.getElementById("update").style.display = "none"
    document.getElementById("delete").style.display = "none"
}

function showSearch() {
    document.getElementById("find").style.display = "initial"
    document.getElementById("insert").style.display = "none"
    document.getElementById("update").style.display = "none"
    document.getElementById("delete").style.display = "none"
}

function showInsert() {
    document.getElementById("find").style.display = "none"
    document.getElementById("insert").style.display = "initial"
    document.getElementById("update").style.display = "none"
    document.getElementById("delete").style.display = "none"
}

function showUpdate() {
    document.getElementById("find").style.display = "none"
    document.getElementById("insert").style.display = "none"
    document.getElementById("update").style.display = "initial"
    document.getElementById("delete").style.display = "none"
}

function showDelete() {
    document.getElementById("find").style.display = "none"
    document.getElementById("insert").style.display = "none"
    document.getElementById("update").style.display = "none"
    document.getElementById("delete").style.display = "initial"
}
// End User