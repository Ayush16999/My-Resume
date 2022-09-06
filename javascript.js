const singupBtn = document.querySelector(".signupBtn");
const LoginBtn = document.querySelector(".LoginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

LoginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginform");
    signup.classList.remove("signupform");
    moveBtn.innerHTML = "Login";
})

singupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    signup.classList.add("signupform");
    login.classList.remove("loginform");
    moveBtn.innerHTML = "singup";
})