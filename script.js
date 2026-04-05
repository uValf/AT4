let tabelaPrecos = {
    "gasolina": 5.89,
    "etanol": 3.79,
    "diesel": 6.10
};

const atualizarValor = (combustivel) => {
    let preco = tabelaPrecos[combustivel];
    
    if(preco == undefined) {
        return 0;
    }
    
    return preco;
}

const calcularAbastecimento = (evento) => {
    evento.preventDefault(); 

    let tipoEscolhido = document.getElementById("tipo").value;
    let litrosDigitados = document.getElementById("litros").value;
    let divResultado = document.getElementById("res");

    if(tipoEscolhido == "" || litrosDigitados == "") {
        alert("Ops! Por favor, preencha todos os campos.");
        divResultado.innerHTML = "";
        return; 
    }

    let litrosConvertidos = parseFloat(litrosDigitados);

    if(isNaN(litrosConvertidos) == true || litrosConvertidos <= 0) {
        alert("Digite um número válido maior que zero!");
        divResultado.innerHTML = "";
        return;
    }

    let valorDoLitro = atualizarValor(tipoEscolhido);
    let valorTotalFinal = valorDoLitro * litrosConvertidos;

    let valorFormatado = valorTotalFinal.toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL"
    });

    divResultado.innerHTML = "Total: " + valorFormatado;
}

let meuFormulario = document.getElementById("formAbast");
meuFormulario.addEventListener("submit", calcularAbastecimento);