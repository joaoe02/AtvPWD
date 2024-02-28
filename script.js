function calcularIdade() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var anoNascimento = document.getElementById('ano').value;

    if (nome && sobrenome && anoNascimento) {
        var anoAtual = new Date().getFullYear();
        var idade = anoAtual - anoNascimento;
        var nomeCompleto = nome + " " + sobrenome;
        var classificar = "";


        if (idade <= 20) {
            classificar = "Novo"
        }
        else if (idade < 40) {
            classificar = "Maduro"
        } else {
            classificar = "Velho"
        }
        document.getElementById('resultado').innerHTML = "Nome completo: " + nomeCompleto + "<br>Idade: " + idade + " anos<br>Experiência: " + classificar;
    } else {
        alert("Preencha todos os campos.");
    }


}