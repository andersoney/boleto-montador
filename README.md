# Sobre o projeto

Biblioteca criada baseada na biblioteca gerar-boleto, buscando tornar simples a renderização do mesmo quando já se tem um sistema que gere os boletos registrados, o ojetivo aqui não é gerar  boleto do zero mas apenas renderizar o mesmo no formato de arquivo pdf. Foi removida algumas complexidades que julguei desnecessarias quando se trata deste fim(converter os dados do boleto em um pdf possivel que seja feito download).

Para que seja inserido mais bancos basta apenas modificar a imagem que será usada como logo no boleto e eventuais mudanças no que se refere ao formato do boleto, para o fim que se fez necessario somente banco do brasil foi solicitado no primeiro momento, logo foi seguido esta formatação.

Outro detalhe é que alguns leitores de PDF não reconheceram a 'fonte' do codigo de barra, desta forma é recomendado que seja aberto usando o browser.

# Parametros para geração do boleto
```
{
  banco: {
    numero: "001",
    digito: "9",
  },
  locaisDePagamento: ["Banco do Brasil"],
  pagador: {
    nome: "José Bonifácio de Andrada",
    registroNacional: "12345678",
    endereco: {
      logradouro: "Rua Pedro Lessa, 15",
      bairro: "Centro",
      cidade: "Rio de Janeiro",
      estadoUF: "RJ",
      cep: "20030-030",
    },
  },
  instrucoes: [
    "Após o vencimento Mora dia R$ 1,59",
    "Após o vencimento, multa de 2%",
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
}
```