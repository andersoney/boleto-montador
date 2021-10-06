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
