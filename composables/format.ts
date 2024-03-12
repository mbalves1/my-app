export function formatDate(dateString) {
  // Criar um objeto Date a partir da string
  const date = new Date(dateString);

  // Opções de formatação
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };

  // Formatar a data
  return new Intl.DateTimeFormat('pt-BR', options).format(date);
}