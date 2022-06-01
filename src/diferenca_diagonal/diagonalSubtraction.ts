export function diagonalSubtraction(matriz: number[][]) {
  let leftDiagonal = 0
  let rightDiagonal = 0

  for(let cont = 0; cont < matriz.length; cont++) {
    if (matriz.length < 3 || matriz.length > 1000) {
      return undefined
    }

    if(matriz[cont].length === 0) {
      return undefined
    }

    leftDiagonal += matriz[cont][cont]
  }

  for(let cont = 0; cont < matriz.length; cont++) {
    rightDiagonal += matriz[cont][matriz.length - cont - 1]
  }

  return (leftDiagonal > 0) && (rightDiagonal > 0) ? Math.abs(rightDiagonal - leftDiagonal) : undefined
}