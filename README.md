# project_currency_converter

Este projeto é um conversor de moedas simples feito com HTML, CSS e JavaScript puro.

## Como funciona

- O usuário informa um valor, escolhe a moeda de origem e a moeda de destino.
- Ao clicar em "Converter", o valor é convertido usando taxas de câmbio fixas definidas no código.
- O resultado é exibido na tela.

## Estrutura dos arquivos

- **index.html**: Estrutura da página e formulário de conversão.
- **style.css**: Estilos visuais para o formulário e layout.
- **script.js**: Lógica de conversão de moedas.

## Lógica do JavaScript (`script.js`)

- O formulário escuta o evento de envio (`submit`).
- Ao enviar, o JavaScript:
  1. Impede o recarregamento da página.
  2. Lê o valor digitado e as moedas selecionadas.
  3. Busca a taxa de câmbio correspondente no objeto `exchangeRates`.
  4. Realiza a conversão (ou mantém o valor se as moedas forem iguais).
  5. Exibe o resultado formatado no elemento `#conversao`.

## Exemplo de uso

1. Digite um valor (ex: 100).
2. Escolha "De: Real (BRL)" e "Para: Dólar (USD)".
3. Clique em "Converter".
4. Veja o resultado da conversão logo abaixo do formulário.

---

**Obs:** As taxas de câmbio são fixas e podem não refletir o valor real do mercado.