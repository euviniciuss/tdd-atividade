export function palindromo(frase: string): string {
  if (!frase || frase.length > 1000) {
   return undefined
  }

  const phrase = frase
 
  const regex = /[^A-Za-z0–9]/g
  const lowerCasePhrase = phrase.toLowerCase().replace(regex, '')
  const reversePharse = lowerCasePhrase.split('').reverse().join('') 

  return reversePharse === lowerCasePhrase ? reversePharse : undefined
}
