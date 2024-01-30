// Aqui vamos formatar o valor em estilo dinheiro

const formatCurrency = value => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency', // estilo moeda
    currency: 'BRL' // qual moeda, o real
  }).format(value.replace(',', '.'))
}
export default formatCurrency
