document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // obter os valores de entrada
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // definir taxas de cambio
    const exchangeRates = {
        USD: { BRL: 5.73, EUR: 0.88 },
        BRL: { USD: 0.17, EUR: 0.15 },
        EUR: { USD: 1.13, BRL: 6.50 }
    };

    let valorConvertido;
    if (daMoeda === paraMoeda) {
        valorConvertido = valor;
    } else {
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }

    const conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;
});