
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

const ColorCard = (color) => `
    <div class="col-4 p-2">
        <div class="card" style="background-color: ${color};">
          <div class="card-body">
            <h5 class="card-title">${color}</h5>
          </div>
        </div>
    </div>
`;

const generateColorButton = document.querySelector("#generate-color");

const colorList = [];

generateColorButton.addEventListener("click", function(){
    const newCard = ColorCard(generateRandomColor())
    colorList.push(newCard);
    colorContainer.innerHTML = colorList.join(" ")
})

