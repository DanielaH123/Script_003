// inputs
const grid = document.getElementById('fizzbuzz-grid')
const fizzInput = document.getElementById('fizz-input')
const buzzInput = document.getElementById('buzz-input')
const matrixInput = document.getElementById('matrix-input')

// botón
const generateButton = document.getElementById('generate-button')

// labels
const fizzLabel = document.getElementById('fizz-label')
const buzzLabel = document.getElementById('buzz-label')
const nLabel = document.getElementById('n-label')


function generateMatrix(n, fizz, buzz) {

    grid.innerHTML = ""
    grid.style.gridTemplateColumns = `repeat(${n}, minmax(0, 1fr))`

    const total = n * n

    for (let i = 1; i <= total; i++) {
        const cell = document.createElement("div")
        cell.classList.add(
            "p-4",
            "text-center",
            "font-bold",
            "rounded-md",
            "border",
            "border-slate-700"
        )

        // siempre mostrar el número
        cell.textContent = i

        // reglas de color
        const isFizz = i % fizz === 0
        const isBuzz = i % buzz === 0

        if (isFizz && isBuzz) {
            cell.classList.add("bg-purple-600")   // múltiplo de ambos
        } else if (isFizz) {
            cell.classList.add("bg-blue-600")     // múltiplo de fizz
        } else if (isBuzz) {
            cell.classList.add("bg-green-600")    // múltiplo de buzz
        } else {
            cell.classList.add("bg-slate-700")    // normal
        }

        grid.appendChild(cell)
    }
}


// evento del botón
generateButton.addEventListener("click", () => {

    const fizz = parseInt(fizzInput.value)
    const buzz = parseInt(buzzInput.value)
    const n = parseInt(matrixInput.value)

    if (!fizz || !buzz || !n) {
        alert("Completa todos los campos")
        return
    }

    // actualizar labels
    fizzLabel.textContent = fizz
    buzzLabel.textContent = buzz
    nLabel.textContent = n

    // generar matriz
    generateMatrix(n, fizz, buzz)
})
