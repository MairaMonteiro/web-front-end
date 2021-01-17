var renda = parseFloat(prompt("Qual a sua renda?"));

var isento = 2000.00;
var taxaTierUm = 0.08;
var taxaTierDois = 0.18;
var taxaTierTres = 0.28;
var rendaIsenta = 2000;
var rendaTierUm = renda - isento;
var rendaTierDois = (renda - isento) - rendaTierUm;
var rensaTierTres = ((renda - isento) - rendaTierUm) - rendaTierDois;
var valorTaxado;

if (renda <= 2000.00){
  console.log("Isento")
} 
else if (renda <= 3000.00){
  valorTaxado = taxaTierUm * rendaTierUm;
  console.log("R$ " + valorTaxado)
} 
else if (renda <= 4500.00){
  valorTaxado = (rendaTierUm * taxaTierUm) + (rendaTierDois * taxaTierDois);
  console.log("R$ " + valorTaxado)
} 
else if (renda > 4500.00){
  taxaTierUm * 1000.00;
  taxaTierDois = 1500.00;
  taxaTierTres = renda - 4500.00;
  valorTaxado = (rendaTierUm * taxaTierUm) + (rendaTierDois * taxaTierDois) + (rensaTierTres * taxaTierTres);
  console.log("R$ " + valorTaxado)
}