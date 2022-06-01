import { palindromo } from './palindromo'

describe('Dada uma string de tamanho variável n, determine se essa string é um palíndromo.', () => {

  it('Verificar se a frase é um palindromo', () => {
    const phrase = 'ABBA'

    const result = palindromo(phrase)

    expect(result).not.toBeUndefined()
  })

  it('Verificar se os espaços em branco são retirados para saber se é um palindromo', () => {
    const phrase = 'SOCORRAM ME SUBI NO ONIBUS EM MARROCOS'

    const result = palindromo(phrase)

    expect(result).not.toBeUndefined()
  })

  it('Verificar se a frase não é um palindromo', () => {
    const phrase = 'ABAB'

    const result = palindromo(phrase)

    expect(result).toBeUndefined()
  })

  it('Verificar se os espaços, virgulas e pontos são retirados', () => {
    const phrase = 'A man, a plan, a canal. Panama'

    const result = palindromo(phrase)

    expect(result).not.toBeUndefined()
  })

  it('Verificar se os números são levados em consideração', () => {
    const phrase = 'My age is 0, 0 si ega ym.'

    const result = palindromo(phrase)

    expect(result).not.toBeUndefined()
  })

  it('Verificar se a string é vazia', () => {
    const phrase = ''

    const result = palindromo(phrase)

    expect(result).toBeUndefined()
  })

  it('Verificar se o tamanho da string é de 1000 caracteres, valor máximo permitido', () => {
    let phrase = ''

    for(let cont = 0; cont < 1000; cont++) {
      phrase = phrase + 't'
    }

    const result = palindromo(phrase)

    expect(result).not.toBeUndefined()
  })

  it('Verificar se o tamanho da string é igual a 1001 caracteres, maior do que o valor máximo', () => {
    let phrase = ''

    for(let cont = 0; cont < 1001; cont++) {
      phrase = phrase + 't'
    }

    const result = palindromo(phrase)

    expect(result).toBeUndefined()
  })
})