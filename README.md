# Sobre o projeto

Biblioteca criada baseada na biblioteca gerar-boleto, buscando tornar simples a renderização do mesmo quando já se tem um sistema que gere os boletos registrados, o ojetivo aqui não é gerar  boleto do zero mas apenas renderizar o mesmo no formato de arquivo pdf. Foi removida algumas complexidades que julguei desnecessarias quando se trata deste fim(converter os dados do boleto em um pdf possivel que seja feito download).

Para que seja inserido mais bancos basta apenas modificar a imagem que será usada como logo no boleto e eventuais mudanças no que se refere ao formato do boleto, para o fim que se fez necessario somente banco do brasil foi solicitado no primeiro momento, logo foi seguido esta formatação.

Outro detalhe é que alguns leitores de PDF não reconheceram a 'fonte' do codigo de barra, desta forma é recomendado que seja aberto usando o browser.

# Parametros para geração do boleto
```
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