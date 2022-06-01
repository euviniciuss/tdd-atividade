export function sum_array(array: number[]): number {  
  if (array.length === 0) {
    return undefined
  }

  const reducer = (accumlator, curr) => accumlator + curr

  const total: number = array.reduce(reducer)  
  
  return (total > 0) && (total <= 1000) ? total : undefined
}