// document.querySelector("#form").onsubmit = function(e){
//     e.preventDefault()
//     console.log("form")
// }
var form = document.getElementById("myForm");
var email = document.getElementById("email")
var password = document.getElementById("password")


function handleForm(event) { 
    event.preventDefault();
    console.log(`Form submitted for user with email: ${email.value} and password: ${password.value}`)
 } 


form.addEventListener('submit', handleForm);
