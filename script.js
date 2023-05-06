const btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const usrname = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const mobno = document.querySelector("#mobno").value
    const time = document.querySelector("#time").value
    const date = document.querySelector("#date").value
    if (usrname == "" || email == "" || mobno == "") {
        alert("Something is missing")
    }
    else {

        console.log("name: " + usrname)
        console.log("email: " + email)
        console.log("mob no: " + mobno)
        console.log("time: " + time)
        console.log("date: " + date)
    }
})