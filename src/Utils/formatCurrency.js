// Aqui vamos formatar o valor em estilo dinheiro

const formatCurrency = value => {
  const formattedValue =
    typeof value === 'string' ? value.replace(',', '.') : value
  return new Intl.NumberFormat('pt-br', {
    style: 'currency', // estilo moeda
    currency: 'BRL' // qual moeda, o real
  }).format(formattedValue)
}
export default formatCurrency
