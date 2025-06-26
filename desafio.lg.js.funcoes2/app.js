// Primeiro desáfio, desáfio do IMC
function ImcPessoal (altura, peso) {
   return peso / (altura * altura);
}
let imc = parseInt(ImcPessoal(1.95 , 70));
console.log(imc);

// Segundo desáfio, fatorial (Verifica mais fundo depois): 
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// Terceiro desáfio, valor em dola
function conversaoDeCambio(real, cotacaoD) {
   return real / cotacaoD
}
let cotacaoReal = parseFloat(conversaoDeCambio(100.00, 4.80)); // Chegamos na solução, mesmo não sendo tão prático. 
console.log(cotacaoReal);

// Quarto desáfio, valor do perêmetro

/* function perimetroDaSala(altura, largura) {
  return (altura + largura) * 2;
}
let medidasDaSala = parseInt(perimetroDaSala(4 , 8));
alert(medidasDaSala); */ // Primeiro código que fizemos. 

// Código correto, entendemos como funciona a entrada e saída de dados em funções que ficamos com certa dúvida : 
function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);

// Quinto desáfio, área circular

function CalcularAreaPerimetroSalaCircular (raio, pi) {
  let areaC = (raio * raio) * pi;
  let perimetroC = 2 * (raio * pi);

  console.log(`A área do seu quarto é ${areaC} metros quadrados`);
  console.log(`O perimêtro do seu quarto é ${perimetroC} metros lineares`);
}

let raio = 5;
let pi = 3.14;
CalcularAreaPerimetroSalaCircular (raio, pi);

// Sexto desáfio, desáfio da tabuada

function mostrarTabuada(numero2) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero2 * i;
    console.log(`${numero2} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero2 = 7;
mostrarTabuada(numero2); // Verificar depois, não revisamos ainda o laços de repetição. 
