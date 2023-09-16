const email = document.getElementById("email");
const password = document.getElementById("password");
const otpInput = document.getElementById("otpInput");
const loginBtn = document.getElementById("loginBtn");
const otpHere = document.getElementById("otpHere");
const getBtn = document.getElementById("getBtn");
const warning = document.getElementById("warning");


const accountInfo = {
    email: "mdshohaghossen29@gmail.com",
    pasw: "1234567",
};
let otpCode;

getBtn.onclick = () => {
    otpCode = Math.floor(Math.random() * 100000);;
    otpHere.innerText = otpCode;
};


loginBtn.onclick = () => {
    const eml = email.value;
    const pass = password.value;
    const otpIn = Number(otpInput.value);
    if (eml !== "" && pass !== "" && otpIn !== "") {
        if (eml === accountInfo.email &&
            pass === accountInfo.pasw &&
            otpIn === otpCode) {
            window.location = "toDoList.html";
        }
        else {
            alert("Invalid Email Or Password");
        }
    }
    else {
        alert("Fill in the box completely");
    }
};