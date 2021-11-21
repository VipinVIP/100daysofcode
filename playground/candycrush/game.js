const grid = document.querySelector(".grid")
const points = document.querySelector(".points")
const squares = []

const getCandy = () => {
  return ["🍡", "🍬", "🍫", "🍭"][Math.floor(Math.random() * 4)]
}

// Filling candies to box
for (let i = 0; i < 9; i++) {
  const square = document.createElement("div")
  square.setAttribute("draggable", true)
  square.setAttribute("id", i)
  square.textContent = getCandy()
  grid.appendChild(square)
  squares.push(square)
}

// game logic
let candyDragged, idDragged, candyReplaced, idReplaced

squares.forEach((square) => {
  square.addEventListener("dragstart", dragStart)
  square.addEventListener("drop", dragDrop)
  square.addEventListener("dragover", (e) => e.preventDefault())
})

function dragStart() {
  candyDragged = this.textContent
  idDragged = parseInt(this.id)
  console.log("dragstarted" + candyDragged)
}
function dragDrop() {
  candyReplaced = this.textContent
  idReplaced = parseInt(this.id)
  this.textContent = candyDragged
  squares[idDragged].textContent = candyReplaced

  for (let i = 0; i <= 2; i++) {
    if (
      squares[i].textContent == squares[i + 3].textContent &&
      squares[i].textContent == squares[i + 6].textContent
    ) {
      points.textContent = parseInt(points.textContent) + 1
      for (j = 0; j <= 6; j += 3) {
        squares[i + j].textContent = getCandy()
      }
    }
  }
}
