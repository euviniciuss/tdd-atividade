import { sum_array } from './sum'

describe('Dado um array de inteiros, encontre a soma de seus elementos', () => {
  it('Somar um array quadrado de inteiros', () => {
    const array = [
      1,2,
      3,4
    ]

    const result = sum_array(array)

    expect(result).toEqual(10)
  })

  it('Verificar se o array está vázio e invalidar sua soma', () => {
    const array = []

    const result = sum_array(array)

    expect(result).toBeUndefined()
  })

  it('Verificar se a soma dos números do array irá dar um valor negativo', () => {
    const array = [
      -1,-2,
      -3,-4
    ]

    const result = sum_array(array)

    expect(result).toBeUndefined()
  })

  it('Verificar a soma do valor 1000, que é o valor máximo permitido', () => {
    const array = []

    for(let cont = 0; cont < 1000; cont++) {
      array.push(1)
    }

    const result = sum_array(array)

    expect(result).toEqual(1000)
  })

  it('Verificar se a soma do array irá ser maior do que 1001', () => {
    const array = []

    for(let cont = 0; cont < 1001; cont++) {
      array.push(1)
    }

    const result = sum_array(array)

    expect(result).toBeUndefined()
  })
})