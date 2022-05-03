# Sobre o projeto

Biblioteca criada baseada na biblioteca gerar-boleto, buscando tornar simples a renderização do mesmo quando já se tem um sistema que gere os boletos registrados, o ojetivo aqui não é gerar  boleto do zero mas apenas renderizar o mesmo no formato de arquivo pdf. Foi removida algumas complexidades que julguei desnecessarias quando se trata deste fim(converter os dados do boleto em um pdf possivel que seja feito download).

Para que seja inserido mais bancos basta apenas modificar a imagem que será usada como logo no boleto e eventuais mudanças no que se refere ao formato do boleto, para o fim que se fez necessario somente banco do brasil foi solicitado no primeiro momento, logo foi seguido esta formatação.

Outro detalhe é que alguns leitores de PDF não reconheceram a 'fonte' do codigo de barra, desta forma é recomendado que seja aberto usando o browser.

Um detalhe importante é que todas as formatações devem ser realizadas antes de passar para a geração do boleto. A biblioteca só faz converter os dados para o formato PDF. 

# Parametros para geração do boleto
```js
{
  numeroDocumento: String(required),
  especieDocumento: String(required),
  valor: Float(required),
  desconto: Float(required),
  codigoDeBarras: String(required),
  codigoDigitavel: String(required),
  imagem: String(required),
  aceite: String(required),
  especieMoeda: String(required),
  deducoes: Float(required),
  banco: {
    numero: String(required),
    digito: String(required),
  },
  locaisDePagamento:[
      String(required)
  ],
  pagador: {
    nome: String(required),
    registroNacional: String(required),
    endereco: {
      logradouro: String(required),
      bairro: String(required),
      cidade: String(required),
      estadoUF: String(required),
      cep: String(required),
    },
  },
  instrucoes: [
    String(required),
  ],
  beneficiario: {
    nome: String(required),
    cnpj: String(required),
    dadosBancarios: {
      carteira: String(required),
      agencia: String(required),
      agenciaDigito: String(required),
      conta: String(required),
      contaDigito: String(required),
      nossoNumero: String(required),
      nossoNumeroDigito: String(required),
    },
    endereco: {
      logradouro: String(required),
      bairro: String(required),
      cidade: String(required),
      estadoUF: String(required),
      cep: String(required),
    },
  },
  datas: {
    vencimento: String(required),
    processamento: String(required),
    documentos: String(required),
  },
}
```

Todos os campos do tipo String podem ser brancos, sendo o unico obstaculo neste caso é que o campo ficará vazio no boleto.

## Exemplo de codigo

```javascript
const { BoletosGerador } = require('./index');

const boleto = {
  banco: {
    numero: "001",
    digito: "9",
  },
  locaisDePagamento: ["Banco do Brasil"],
  pagador: {
    nome: "José Bonifácio de Andrada",
    registroNacional: "12345678",
    endereco: {
      logradouro: "",
      bairro: "",
      cidade: "",
      estadoUF: "",
      cep: "",
    },
  },
  instrucoes: [
    "Não aceitar pagamento apos o vencimento.",
  ],
  beneficiario: {
    nome: "Empresa Fictícia LTDA",
    cnpj: "43576788000191",
    dadosBancarios: {
      carteira: "09",
      agencia: "18455",
      agenciaDigito: "4",
      conta: "1277165",
      contaDigito: "1",
      nossoNumero: "00000000061",
      nossoNumeroDigito: "8",
    },
    endereco: {
      logradouro: "Rua Pedro Lessa, 15",
      bairro: "Centro",
      cidade: "Rio de Janeiro",
      estadoUF: "RJ",
      cep: "20030-030",
    },
  },
  numeroDocumento: "1001",
  especieDocumento: "DM",
  valor: 110.0,
  desconto: 5.0,
  codigoDeBarras: "00191815500000110000000000006118455127716509",
  codigoDigitavel: "00099.99921 50000.010004 94999.999900 9 87640000010000",
  datas: {
    vencimento: "02/04/2020",
    processamento: "02/04/2019",
    documentos: "02/04/2019",
  },
  imagem: "banco-do-brasil.png",
  aceite: "N",
  especieMoeda: "R$",
  deducoes: 0.0
};

const novoBoleto = new BoletosGerador(boleto);
novoBoleto
  .pdfFile([boleto])
  // .pdfFile([boleto],"./","boleto.pdf")

```

