const express = require("express");
const multer = require("../arquivos/multer");

const rotas = express();

const intermediarioUsuarioCadastrar = require("../intermediarios/usuarios/intermediarioUsuarioCadastrar");
const intermediarioUsuarioLogin = require("../intermediarios/usuarios/intermediarioUsuarioLogin");
const intermediarioUsuarioVerificarLogin = require("../intermediarios/usuarios/intermediarioUsuarioVerificarLogin");
const intermediarioUsuarioLogarAdministrador = require("../intermediarios/usuarios/intermediarioUsuarioLogarAdministrador");

const intermediarioClienteCadastrar = require("../intermediarios/clientes/intermediarioClienteCadastrar");
const intermediarioClienteAtualizar = require("../intermediarios/clientes/intermediarioClienteAtualizar");
const intermediarioClienteDeletar = require("../intermediarios/clientes/intermediarioClienteDeletar");

const intermediarioFeiraCadastrar = require("../intermediarios/feiras/intermediarioFeiraCadastrar");
const intermediarioFeiraDeletar = require("../intermediarios/feiras/intermediarioFeiraDeletar");
const intermediarioFeiraBuscaGeral = require("../intermediarios/feiras/buscas/intermediarioFeiraBuscaGeral");

const intermediarioLocacaoCadastrar = require("../intermediarios/locacoes/intermediarioLocacaoCadastrar");
const intermediarioLocacaoRelatorio = require("../intermediarios/locacoes/intermediarioLocacaoRelatorio");
const intermediarioLocacaoFinalizar = require("../intermediarios/locacoes/intermediarioLocacaoFinalizar");
const intermediarioLocacaoReiniciar = require("../intermediarios/locacoes/intermediarioLocacaoReiniciar");

const intermediarioBancoCadastrar = require("../intermediarios/bancos/intermediarioBancoCadastrar");
const intermediarioBancoAtualizar = require("../intermediarios/bancos/intermediarioBancoAtualizar");
const intermediarioBancoDeletar = require("../intermediarios/bancos/intermediarioBancoDeletar");
const intermediarioBancoBuscaGeral = require("../intermediarios/bancos/buscas/intermediarioBancoBuscaGeral");
const intermediarioBancoBuscaNaoCobrados = require("../intermediarios/bancos/buscas/intermediarioBancoBuscaNaoCobrados");

const intermediarioNaoPagoCadastrar = require("../intermediarios/naoPago/intermediarioNaoPagoCadastrar");
const intermediarioNaoPagoDeletar = require("../intermediarios/naoPago/intermediarioNaoPagoDeletar");

const intermediarioPagoCadastrar = require("../intermediarios/pago/intermediarioPagoCadastrar");
const intermediarioPagoDeletar = require("../intermediarios/pago/intermediarioPagoDeletar");

const intermediarioBuscarNaoPagantesIntervaloDatas = require("../intermediarios/naoPago/buscas/intermediarioBuscarNaoPagantesIntervaloDatas");



const controladorUsuarioCadastrar = require("../controladores/usuarios/controladorUsuarioCadastrar");
const controladorUsuarioLogin = require("../controladores/usuarios/controladorUsuarioLogin");

const controladorFeiraCadastrar = require("../controladores/feiras/controladorFeiraCadastrar");
const controladorFeiraDeletar = require("../controladores/feiras/controladorFeiraDeletar");
const controladorFeiraBuscaGeral = require("../controladores/feiras/buscas/controladorFeiraBuscaGeral");
const controladorFeiraListar = require("../controladores/feiras/controladorFeiraListar");

const controladorClienteCadastrar = require("../controladores/clientes/controladorClienteCadastrar");
const controladorClienteAtualizar = require("../controladores/clientes/controladorClienteAtualizar");
const controladorClienteDeletar = require("../controladores/clientes/controladorClienteDeletar");

const controladorLocacaoCadastrar = require("../controladores/locacoes/controladorLocacaoCadastrar");
const controladorLocacaoRelatorio = require("../controladores/locacoes/controladorLocacaoRelatorio");
const controladorLocacaoFinalizar = require("../controladores/locacoes/controladorLocacaoFinalizar");
const controladorLocacaoReiniciar = require("../controladores/locacoes/controladorLocacaoReiniciar");

const controladorBancoCadastrar = require("../controladores/bancos/controladorBancoCadastrar");
const controladorBancoAtualizar = require("../controladores/bancos/controladorBancoAtualizar");
const controladorBancoDeletar = require("../controladores/bancos/controladorBancoDeletar");
const controladorBancoBuscaGeral = require("../controladores/bancos/buscas/constroladorBancoBuscaGeral");
const controladorBancosBuscaNaoCobrados = require("../controladores/bancos/buscas/controladorBancoBuscaNaoCobrados");

const controladorNaoPagoCadastrar = require("../controladores/naoPago/controladorNaoPagoCadastrar");
const controladorNaoPagoDeletar = require("../controladores/naoPago/controladorNaoPagoDeletar");

const controladorPagoCadastrar = require("../controladores/pago/controladorPagoCadastrar");
const controladorPagoDeletar = require("../controladores/pago/controladorPagoDeletar");

const controladorBuscarNaoPagantesIntervaloDatas = require("../controladores/naoPago/buscas/controladorBuscarNaoPagantesIntervaloDatas");



const schemaUsuarrioCadastrar = require("../validacoes/usuarios/schemaUsuarioCadastrar");
const schemaUsuarioLogin = require("../validacoes/usuarios/schemaUsuarioLogin");

const schemaFeiraCadastrar = require("../validacoes/feiras/schemaFeiraCadastrar");
const schemaFeiraDeletar = require("../validacoes/feiras/schemaFeiraDeletar");
const schemaFeiraBuscaGeral = require("../validacoes/feiras/buscas/schemaFeiraBuscaGeral");

const schemaClienteCadastrar = require("../validacoes/clientes/schemaClienteCadastrar");
const schemaClienteAtualizar = require("../validacoes/clientes/schemaClienteAtualizar");
const schemaClienteDeletar = require("../validacoes/clientes/schemaClienteDeletar");

const schemaLocacaoCadastrar = require("../validacoes/locacoes/schemaLocacaoCadastrar");
const schemaLocacaoRelatorio = require("../validacoes/locacoes/schemaLocacaoRelatorio");
const schemaLocacaoFinalizar = require("../validacoes/locacoes/schemaLocacaoFInalizar");
const schemaLocacaoReiniciar = require("../validacoes/locacoes/schemaLocacaoReiniciar");

const schemaBancoCadastrar = require("../validacoes/bancos/schemaBancoCadastrar");
const schemaBancoAtualizar = require("../validacoes/bancos/schemaBancoAtualizar");
const schemaBancoDeletar = require("../validacoes/bancos/schemaBancoDeletar");
const schemaBancoBuscaGeral = require("../validacoes/bancos/buscas/schemaBancoBuscaGeral");
const schemaBancoBuscaNaoCobrados = require("../validacoes/bancos/buscas/schemaBancoBuscaNaoCobrados");

const schemaNaoPagoCadastrar = require("../validacoes/naoPago/schemaNaoPagoCadastrar");
const schemaNaoPagoDeletar = require("../validacoes/naoPago/schemaNaoPagoDeletar");

const schemaPagoCadastrar = require("../validacoes/pago/schemaPagoCadastrar");
const schemaPagoDeletar = require("../validacoes/pago/schemaPagoDeletar");

const schemaBuscaNaoPagantesIntervaloDatas = require("../validacoes/naoPago/buscas/schemaBuscaNaoPagantesIntervaloDatas");


rotas.post(
    '/login',
    intermediarioUsuarioLogin(schemaUsuarioLogin),
    controladorUsuarioLogin
);

rotas.use(intermediarioUsuarioVerificarLogin);

rotas.get(
    '/feiras',
    controladorFeiraListar
);

rotas.post(
    '/naoPago',
    multer.single("file"),
    intermediarioNaoPagoCadastrar(schemaNaoPagoCadastrar),
    controladorNaoPagoCadastrar
);

rotas.post(
    '/pago',
    intermediarioPagoCadastrar(schemaPagoCadastrar),
    controladorPagoCadastrar
);

// rotas.get(
//     '/bancosBuscaNaoCobrados',
//     intermediarioBancoBuscaNaoCobrados(schemaBancoBuscaNaoCobrados),
//     controladorBancosBuscaNaoCobrados
// );

rotas.use(intermediarioUsuarioLogarAdministrador);

rotas.post(
    '/usuarios',
    intermediarioUsuarioCadastrar(schemaUsuarrioCadastrar),
    controladorUsuarioCadastrar
);

rotas.post(
    '/feiras',
    intermediarioFeiraCadastrar(schemaFeiraCadastrar),
    controladorFeiraCadastrar
);

rotas.post(
    '/clientes',
    intermediarioClienteCadastrar(schemaClienteCadastrar),
    controladorClienteCadastrar
);

rotas.post(
    '/locacoes',
    intermediarioLocacaoCadastrar(schemaLocacaoCadastrar),
    controladorLocacaoCadastrar
);

rotas.post(
    '/bancos',
    intermediarioBancoCadastrar(schemaBancoCadastrar),
    controladorBancoCadastrar
);

rotas.get(
    '/relatorio',
    intermediarioLocacaoRelatorio(schemaLocacaoRelatorio),
    controladorLocacaoRelatorio
);

rotas.get(
    '/naoPagantes',
    intermediarioBuscarNaoPagantesIntervaloDatas(schemaBuscaNaoPagantesIntervaloDatas),
    controladorBuscarNaoPagantesIntervaloDatas
);

rotas.get(
    '/bancos',
    intermediarioBancoBuscaGeral(schemaBancoBuscaGeral),
    controladorBancoBuscaGeral
);

rotas.get(
    '/feirasBuscaGeral',
    intermediarioFeiraBuscaGeral(schemaFeiraBuscaGeral),
    controladorFeiraBuscaGeral
);

rotas.put(
    '/clientes',
    intermediarioClienteAtualizar(schemaClienteAtualizar),
    controladorClienteAtualizar
);

rotas.put(
    '/bancos',
    intermediarioBancoAtualizar(schemaBancoAtualizar),
    controladorBancoAtualizar
);

rotas.put(
    '/locacaoFinalizar',
    intermediarioLocacaoFinalizar(schemaLocacaoFinalizar),
    controladorLocacaoFinalizar
);

rotas.put(
    '/locacaoReiniciar',
    intermediarioLocacaoReiniciar(schemaLocacaoReiniciar),
    controladorLocacaoReiniciar
);

rotas.delete(
    '/clientes',
    intermediarioClienteDeletar(schemaClienteDeletar),
    controladorClienteDeletar
);

// Conflito com a tabela naoPago e pago. Repensar a utilidade dessa rota.
// rotas.delete(
//     '/bancos',
//     intermediarioBancoDeletar(schemaBancoDeletar),
//     controladorBancoDeletar
// );

rotas.delete(
    '/feiras',
    intermediarioFeiraDeletar(schemaFeiraDeletar),
    controladorFeiraDeletar
);

rotas.delete(
    '/pago',
    intermediarioPagoDeletar(schemaPagoDeletar),
    controladorPagoDeletar
);

rotas.delete(
    '/naoPago',
    intermediarioNaoPagoDeletar(schemaNaoPagoDeletar),
    controladorNaoPagoDeletar
);

module.exports = rotas;