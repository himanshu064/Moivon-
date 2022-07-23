export const formatCurrency = (price, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(price);
