// creates a new paragraph element and appends it to the element with id "parent-element"
function createParagraph(text, theClass) {
    
    // selects element with id "parent-element"
    const parentElement = document.querySelector('#parent-element');
    
    // create a new paragraph element
    const newParagraph = document.createElement('p');
    
    //add a class name to the new paragraph
    newParagraph.classList.add(theClass);
    
    // add some text content to the new paragraph
    newParagraph.textContent = text;
    
    // append the new paragraph to the parent element
    parentElement.appendChild(newParagraph);
    
    }





function firstFact() {
 const textToUse = "My name is Josh and I enjoy both dancing and programming. These are two of my passions that I devote my time and energy to."

createParagraph(textToUse, "my-class1");

// create a new button element
const myButton = document.createElement('button');
      
// set the button's text
myButton.innerText = 'Click me';

myButton.addEventListener('click', function() {
    const text ="I have experience with several programming languages, including Java, JavaScript, Python, and Kotlin. Additionally, I have practical knowledge of CAD software such as AutoCAD and FreeCAD.";
    createParagraph(text, "my-class2");

    // create a new button element
    const newButton = document.createElement('button');
        
    // set the button's text
    newButton.innerText = ' now Click me';

    newButton.addEventListener('click', function() {

        const textImUsin = "At the very essence of my being, lies a set of core values that serve as guiding principles in every aspect of my life. These values comprise a deep-seated reverence for family bonds, an unshakeable commitment to loyalty, an unwavering dedication to putting in persistent hard work, and a profound appreciation for the inherent value of treating others with the utmost respect. These values not only shape my beliefs and attitudes but also inspire me to strive towards becoming the best version of myself.";
        
        createParagraph(textImUsin, "my-class3");
    });
    const otherParent = document.querySelector(".my-class2")
    // add the button to the page
    otherParent.appendChild(newButton);
  });

// add the button to the page
document.body.appendChild(myButton);

}

