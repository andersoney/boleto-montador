const fs = require('fs');
const Gerador = require('./gerador-de-boleto');
module.exports = class Boletos {
  pdfFile(boletos = null, dir = './tmp/boletos', filename = "/boleto.pdf") {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir,{ recursive: true });
    const stream = fs.createWriteStream(`${dir}${filename}`);
    new Gerador().gerarPDF({
      creditos: '',
      stream,
    }, boletos);
  }
};