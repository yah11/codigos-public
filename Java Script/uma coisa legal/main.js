// Funções de exemplo (Substitua essas funções com a lógica real)
function entrada_cinema(idade) {
    if (idade < 18) {
        alert("Você não pode assistir a esse filme.");
    } else {
        alert("Você pode assistir ao filme.");
    }
}

function impar_par(n) {
    if (n % 2 === 0) {
        alert("O número " + n + " é par.");
    } else {
        alert("O número " + n + " é ímpar.");
    }
}

function desconto(valor_compra) {
    let desconto = 0.1; // 10% de desconto
    let valor_final = valor_compra - (valor_compra * desconto);
    alert("Valor com desconto: " + valor_final);
}

function calcular_tarifa(idade) {
    if (idade < 12) {
        alert("Tarifa infantil");
    } else if (idade < 60) {
        alert("Tarifa normal");
    } else {
        alert("Tarifa para idosos");
    }
}

function notas(nota) {
    if (nota >= 7) {
        alert("Aprovado!");
    } else {
        alert("Reprovado!");
    }
}

function velocidade(v) {
    if (v > 80) {
        alert("Velocidade acima do limite!");
    } else {
        alert("Velocidade dentro do limite.");
    }
}

function calcular_imposto(salario) {
    let imposto = salario * 0.1; // 10% de imposto
    alert("Imposto devido: " + imposto);
}

function verificar_senha(senha) {
    if (senha === "1234") {
        alert("Senha correta!");
    } else {
        alert("Senha incorreta!");
    }
}

function adivinhar_numero() {
    let numero = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    while (true) {
        tentativa = prompt("Tente adivinhar o número entre 1 e 10 (ou clique em 'Cancelar' para parar):");

        if (tentativa === null) {
            alert("Você saiu do jogo. Até logo!");
            break;
        }

        tentativa = parseInt(tentativa);

        if (isNaN(tentativa)) {
            alert("Por favor, insira um número válido.");
            continue;
        }

        if (tentativa === numero) {
            alert("Parabéns, você acertou!");
            break;
        } else if (tentativa > numero) {
            alert("Muito alto! Tente novamente.");
        } else {
            alert("Muito baixo! Tente novamente.");
        }
    }
}  


function calcular_abastecimento(tipo_combustivel, litros) {
    let preco_gasolina = 5.50;  // Exemplo de preço
    let preco_alcool = 3.50;    // Exemplo de preço
    
    let total = 0;
    
    if (tipo_combustivel === "gasolina") {
        total = litros * preco_gasolina;
    } else if (tipo_combustivel === "alcool") {
        total = litros * preco_alcool;
    }
    
    alert("Total a pagar: " + total);
}

// Função principal que simula o menu de exercícios
function menu() {
    while (true) {
        let exercicio = prompt(
            `Digite '1' para selecionar o primeiro exercício
Digite '2' para selecionar o segundo exercício
Digite '3' para selecionar o terceiro exercício
Digite '4' para selecionar o quarto exercício
Digite '5' para selecionar o quinto exercício
Digite '6' para selecionar o sexto exercício
Digite '7' para selecionar o sétimo exercício
Digite '8' para selecionar o oitavo exercício
Digite '9' para selecionar o nono exercício
Digite '10' para selecionar o décimo exercício
Digite '0' para sair`
        );

        if (exercicio === "0") {
            alert("Saindo do programa...");
            break;
        }

        switch (exercicio) {
            case "1":
                let idade = parseInt(prompt("Digite sua idade: "));
                entrada_cinema(idade);
                break;
            case "2":
                let n = parseInt(prompt("Digite um número: "));
                impar_par(n);
                break;
            case "3":
                let valor_compra = parseFloat(prompt("Digite o valor da compra: "));
                desconto(valor_compra);
                break;
            case "4":
                let idade_1 = parseInt(prompt("Informe sua idade: "));
                calcular_tarifa(idade_1);
                break;
            case "5":
                let nota = parseInt(prompt("Informe sua nota: "));
                notas(nota);
                break;
            case "6":
                let v = parseInt(prompt("Informe a velocidade em KM/h: "));
                velocidade(v);
                break;
            case "7":
                let salario = parseFloat(prompt("Digite seu salário mensal: "));
                calcular_imposto(salario);
                break;
            case "8":
                let senha = prompt("Digite sua senha: ");
                verificar_senha(senha);
                break;
            case "9":
                adivinhar_numero();
                break;
            case "10":
                let tipo_combustivel = prompt("Digite o tipo de combustível (gasolina ou alcool): ").toLowerCase();
                let litros = parseFloat(prompt("Quantos litros deseja abastecer? "));
                calcular_abastecimento(tipo_combustivel, litros);
                break;
            default:
                alert("Opção inválida!");
                break;
        }
    }
}

menu();