const buttonOne = document.getElementById("firstButton")

buttonOne.addEventListener("click", function(){
  alert("Welcome to my homepage!")
});

const buttonTwo = document.getElementById("secondButton")

buttonTwo.addEventListener("click", function() {
  const aboutMe = document.createElement("p");
  aboutMe.textContent = "I am a software engineer with a passion for building web applications.";
  document.body.appendChild(aboutMe);
});

const buttonThree = document.getElementById("thirdButton");

buttonThree.addEventListener("click", function() {
  const contactInfo = document.createElement("ul");
  const name = document.createElement("li");
  const phone = document.createElement("li");
  const email = document.createElement("li");
  
  name.textContent = "Joshua C. Kregg" ;
  phone.textContent = "928-273-3531" ;
  email.textContent = "kreggjoshua@gmail.com";

  contactInfo.appendChild(name);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(email);

  document.body.appendChild(contactInfo);
});
  