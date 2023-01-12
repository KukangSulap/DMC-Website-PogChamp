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

function clearPlane() {
    document.getElementById("findPlane").style.display = "none"
    document.getElementById("insertPlane").style.display = "none"
    document.getElementById("updatePlane").style.display = "none"
    document.getElementById("deletePlane").style.display = "none"
}

function showSearchPlane() {
    document.getElementById("findPlane").style.display = "initial"
    document.getElementById("insertPlane").style.display = "none"
    document.getElementById("updatePlane").style.display = "none"
    document.getElementById("deletePlane").style.display = "none"
}

function showInsertPlane() {
    document.getElementById("findPlane").style.display = "none"
    document.getElementById("insertPlane").style.display = "initial"
    document.getElementById("updatePlane").style.display = "none"
    document.getElementById("deletePlane").style.display = "none"
}

function showUpdatePlane() {
    document.getElementById("findPlane").style.display = "none"
    document.getElementById("insertPlane").style.display = "none"
    document.getElementById("updatePlane").style.display = "initial"
    document.getElementById("deletePlane").style.display = "none"
}

function showDeletePlane() {
    document.getElementById("findPlane").style.display = "none"
    document.getElementById("insertPlane").style.display = "none"
    document.getElementById("updatePlane").style.display = "none"
    document.getElementById("deletePlane").style.display = "initial"
}