export const formatCurrency = (number) => {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };
  const formatNumber = new Intl.NumberFormat('pt-BR', options);
  return formatNumber.format(number);
};
