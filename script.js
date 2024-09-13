/*
Apresente o Menu de Pizzas:
1 -> Mussarela -> R$ 20,00
2 -> Calabresa -> R$ 25,00
3 -> Marguerita -> R$ 23,00
4 -> 4 Queijos -> R$ 29,99
5 -> Baiana -> 22,50

Apresente o Menu de Bebidas:
1 -> Refrigerante Lata -> R$ 5,00
2 -> Refrigerante 2L -> R$ 10,00
3 -> Agua -> R$ 3,50
4 -> Suco -> R$ 7,50

Solicite ao usuário qual Pizza e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente o total a pagar.
*/
var menuPizzas = "==== Escolha um sabor de pizza ====\n";
menuPizzas = menuPizzas + "Código | sabor | preço";
menuPizzas += "1 -> Mussarela -> R$ 20,00\n";
menuPizzas += "2 -> Calabresa -> R$ 25,00\n";
menuPizzas += "3 -> Marguerita -> R$ 23,00\n";
menuPizzas += "4 -> 4 Queijos -> R$ 29,99\n";
menuPizzas += "5 -> Baiana -> 22,50\n";
menuPizzas += "\nDigite o código do lanche escolhido:"

var codigoSabor = parseInt(prompt(menuPizzas));
var quantidade = parseInt(prompt("Quantas pizzas deseja pedir:"));
var valorTotal = 0;

var quantidadeRefri = parseInt(prompt("Quantas bebidas deseja pedir:"));
var codigoRefrigerante = parseInt(prompt(menuBebidas));
var

var menuBebidas = "==== Escolha uma bebida ====\n";
menuBebidas = menuBebidas + "Código | sabor | preço";
menuBebidas += "1 -> Refrigerante Lata -> R$ 5,00\n";
menuBebidas += "2 -> Refrigerante 2L -> R$ 10,00\n";
menuBebidas += "3 -> Agua -> R$ 3,50\n";
menuBebidas += "4 -> Suco -> R$ 7,50\n";
menuBebidas += "\n Digite o código da bebida escolhida:";

if(codigoSabor == 1){
    console.log("O sabor de pizza escolhido é " + codigoSabor);
}else if(codigoSabor == 2){
    console.log("O sabor de pizza escolhido é " + codigoSabor);
}else if(codigoSabor == 3){
    console.log("O sabor de pizza escolhido é " + codigoSabor);
}