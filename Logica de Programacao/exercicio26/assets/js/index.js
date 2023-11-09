function isValidNumber(value) {
    if (!Number(value) || Number(value) < 0) {
        return false;
    };
    return true;
}

function ImcValidation(imc_value, div_result) {
    let result;

    imc_results = {
        abaixo: 'Abaixo do Peso',
        normal: 'Peso Normal',
        sobrepeso: 'Sobrepeso',
        obesidade1: 'Obesidade Grau 1',
        obesidade2: 'Obesidade Grau 2',
        obesidade3: 'Obesidade Grau 3',
    };

    const bad_imcs = [imc_results.sobrepeso, imc_results.obesidade1, imc_results.obesidade2, imc_results.obesidade3]

    div_result.classList.add('paragrafo-resultado')

    if (imc_value < 18.5) result = imc_results.abaixo;
    if (imc_value >= 18.5 && imc_value <= 24.9) result = imc_results.normal;
    if (imc_value >= 25 && imc_value <= 29.9) result = imc_results.sobrepeso;
    if (imc_value >= 30 && imc_value <= 34.9) result = imc_results.obesidade1;
    if (imc_value >= 35 && imc_value <= 39.9) result = imc_results.obesidade2;
    if (imc_value >= 40) result = imc_results.obesidade3;
    
    if (bad_imcs.includes(result)) {
        div_result.classList.add('bad');
    }
    else{
        div_result.classList.remove('bad');
    }

    div_result.innerHTML = `Seu IMC é ${imc_value} (${result})`;
}

(() => {
    const form = document.getElementById('formulario')
    let resultado = document.getElementById('resultado')

    form.addEventListener('submit', (e) => {
        const peso = document.getElementById('peso').value;
        const altura = document.getElementById('altura').value;
        e.preventDefault();

        if (!isValidNumber(peso) || !isValidNumber(altura)) {
            resultado.classList.add('bad');
            resultado.innerHTML = 'Preencha Todos os Campos Corretamente.';
        }
        else {
            const calculoIMC = (peso / (altura ** 2)).toFixed(1)
            ImcValidation(calculoIMC, resultado)
        }
    })

})();