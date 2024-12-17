
function pickRandom(lista){
    let randomNumber = Math.random() * lista.length;
    let roundedNumber = Math.floor(randomNumber);
    return lista[roundedNumber];
}

function generateRandomColor(){
    let color = "#";
    
    const valoresHexadecimales = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
    
    for(let index = 0; index < 6; index++){
        color += pickRandom(valoresHexadecimales); // concatenar
    }
    return color;
}

let newColor = generateRandomColor();
let bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = newColor;

let colorTextElement = document.querySelector("#color-text");
colorTextElement.textContent = newColor;

let colorContainer = document.querySelector("#colors-container");

// solo DOM elements
const ColorCardElement = (color) => {
    const divElement = document.createElement("div");
    divElement.classList = "col-4 p-2";
    const cardElement = document.createElement("div");
    cardElement.classList = "card";
    cardElement.style.backgroundColor = color;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const h5element = document.createElement("h5");

    h5element.classList.add("card-title");
    h5element.innerText = color;
    

    console.log(cardBody, cardElement, divElement)

    cardBody.appendChild(h5element);
    cardElement.appendChild(cardBody);
    divElement.appendChild(cardElement);

    console.log(divElement);

    return divElement;
}

const generateColorButton = document.querySelector("#generate-color");

generateColorButton.addEventListener("click", () => {
    const newColor = generateRandomColor();
    const newCard = ColorCardElement(newColor);
    colorContainer.appendChild(newCard);
})


const colorInput = document.querySelector("#color-input");
const colorTestContainer = document.querySelector("#color-test-container");
const colorTestTitle = document.querySelector("#color-test-title");

colorInput.addEventListener("change", (evento) => {
    const inputText = evento.target.value;
    colorTestContainer.style.backgroundColor = inputText;
    colorTestTitle.innerText = inputText;
})  