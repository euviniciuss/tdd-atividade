import { diagonalSubtraction } from './diagonalSubtraction'

describe('Dada uma matriz quadrada de tamanho n, calcule a diferença absoluta da soma de suas diagonais', () => {
  it('Verificar a diferença das diagonais', () => {
    const matriz = [
      [1, 2, 3,],
      [4, 5, 6,],
      [9, 8 ,9]
    ]
    const result = diagonalSubtraction(matriz)

    expect(result).toEqual(2)
  })

  it('Verificar se a matriz está vazia', () => {
    const matriz = [
      [],
      [],
      []
    ]
    const result = diagonalSubtraction(matriz)

    expect(result).toBeUndefined()
  })

  it('Verificar o tamanho minímo de 2 linhas da matriz', () => {
    const matriz = [
      [1, 2, 3,],
      [4, 5, 6,],
    ]
    const result = diagonalSubtraction(matriz)

    expect(result).toBeUndefined()
  })

  it('Verificar o tamanho máximo de 1000 linhas da matriz', () => {
    const matriz = []
    const array = [1, 2, 3]

    for(let cont = 0; cont < 1000; cont++) {
      matriz.push(array)
    }    

    const result = diagonalSubtraction(matriz)

    expect(result).toBeUndefined()
  })
})