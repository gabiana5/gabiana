
document.getElementById("regForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("fullName").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name == "" || mobile == "" || password == "") {
        alert("Please fill in all required fields.");
    }
    else if (!/^[0-9]{11}$/.test(mobile)) {
        alert("Mobile number must contain 11 digits.");
    }
    else if (password != confirmPassword) {
        alert("Passwords do not match.");
    }
    else {
        alert("Registration Successful!");
        document.getElementById("regForm").reset();
    }

});
