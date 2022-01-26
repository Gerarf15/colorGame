let cantidadCuadrados = 6
let colors = generateRandomColors(cantidadCuadrados)
let pickedColor = pickColor()
let cuadrados = document.querySelectorAll(".square")
var colorDisplay = document.querySelector("#colorDisplay")
let buttonReset = document.querySelector("#reset")
let hard = document.querySelector("#btnH")
let easy = document.querySelector("#btnE")
let message = document.querySelector("#message")
colorDisplay.textContent = pickedColor


for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i]
}
var h1 = document.querySelector("h1")

for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i]
    cuadrados[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor
        if (clickedColor != pickedColor) {
            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again"
        } else {
            message.textContent = "Correct!"
            buttonReset.textContent = "Play Again?"
            h1.style.backgroundColor = clickedColor
            changeColors(clickedColor)
        }
    })
}

function changeColors(color) {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = color

    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function generateRandomColors(numero) {
    var arr = []
    for (var i = 0; i < numero; i++) {
        arr[i] = randomColor()
    }
    return arr
}

buttonReset.addEventListener("click", function () {
    resete()
})

function resete() {
    colors = generateRandomColors(cantidadCuadrados)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (let i = 0; i < cuadrados.length; i++) {
        if (colors[i]) {
            cuadrados[i].style.backgroundColor = colors[i]
            cuadrados[i].style.display = "block"
        } else {
            cuadrados[i].style.display = "none"
        }
    }
    buttonReset.textContent = "New Colors"
    h1.style.backgroundColor = ""
    message.textContent = ""
}

btnE.addEventListener("click", function () {
    if (cantidadCuadrados != 3) {
        btnE.classList.add("selected")
        btnH.classList.remove("selected")
        cantidadCuadrados = 3
        resete()
    }
})
btnH.addEventListener("click", function () {
    if (cantidadCuadrados != 6) {
        btnH.classList.add("selected")
        btnE.classList.remove("selected")
        cantidadCuadrados = 6
        resete()
    }
})