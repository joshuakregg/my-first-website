const h1 = document.createElement("h1");
h1.textContent = "things about me!";
document.body.appendChild(h1);



  const buttonOne = document.getElementById("firstButton")

  buttonOne.addEventListener("click", function() {
    alert("you are home")
  });

  const buttonTwo = document.getElementById("secondButton")

  buttonTwo.addEventListener("click", function() {
    statements = [
        "I love programming",
        "I enjoy latin dancing",
        "I only speak 1 language!"
      ];
    
      const ul = document.createElement("ul");
      for (let i = 0; i < statements.length; i++) {
        let li = document.createElement("li");
        li.textContent = statements[i];
        ul.appendChild(li);
      }
    
      document.body.appendChild(ul);
  });
 const buttonThree = document.getElementById("thirdButton");

buttonThree.addEventListener("click", function() {
    statements = [
        "Joshua Kregg",
        "928-273-3531",
        "kreggjoshua@gmail.com"
      ];
    
      const ul = document.createElement("ul");
      for (let i = 0; i < statements.length; i++) {
        let li = document.createElement("li");
        li.textContent = statements[i];
        ul.appendChild(li);
      }
    
      document.body.appendChild(ul);
});

  