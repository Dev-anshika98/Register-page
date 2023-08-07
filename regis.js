function validation() {
    if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username";
        return false;
    } else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "At least 6 letters";
        return false;
    } else if (document.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your Email";
        return false;
    } else if (document.Formfill.PhoneNo.value == "") {
        document.getElementById("result").innerHTML = "Enter your phone No";
        return false;
    } else if (document.Formfill.PhoneNo.value.length !== 10) {
        document.getElementById("result").innerHTML = "Enter a valid Phone no";
        return false;
    } else if (document.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your password";
        return false;
    } else if (document.Formfill.cPassword.value !== document.Formfill.Password.value) {
        document.getElementById("result").innerHTML = "Password Doesn't Match";
        return false;
    } else if (document.Formfill.cPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter your confirm password";
        return false;
    } else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6 digits";
        return false;
    } else if (document.Formfill.Password.value == document.Formfill.cPassword.value) {
        popup.classList.add("open-slide");
        return false;
    }
}

var popup = document.getElementById("popup");

function CloseSlide() {
    popup.classList.remove("open-slide");
}