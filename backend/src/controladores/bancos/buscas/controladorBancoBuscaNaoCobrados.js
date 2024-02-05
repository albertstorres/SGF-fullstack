const knex = require("../../../conexoes/conexao");

const controladorBancosBuscaNaoCobrados = async (req, res) => {
    const { feiras_id, locacoes_id } = req.body;

    try {
        const feiraEncontrada = await knex("feiras").where("id", feiras_id).first();
        if (!feiraEncontrada) {
            return res.status(404).json({ mensagem: "Feira não cadastrada." });
        }

        const bancosDafeiraEncontrada = await knex("bancos").select("id").where("feiras_id", feiras_id).orderBy("id");
        if (!bancosDafeiraEncontrada) {
            return res.status(500).json({ mensagem: "Erro interno do servidor." });
        }

        const locacaoEncontrada = await knex("locacoes").where("id", locacoes_id).first();
        if (!locacaoEncontrada) {
            return res.status(404).json({ mensagem: "Locação não cadastrada." });
        }

        const bancosJaCobradosDoBd = await knex("cobrar").select("bancos_id").where("feiras_id", feiras_id).where("locacoes_id", locacoes_id).orderBy("bancos_id");

        const bancosJaCobrados = bancosJaCobradosDoBd.filter((banco) => {
            if (bancosDafeiraEncontrada.every(banco.bancos_id) === banco.id) {
                return banco;
            }

        });

        const bancosNaoCobrados = bancosDafeiraEncontrada.filter((banco) => {
            if (bancosJaCobradosDoBd.indexOf(banco.id) === -1) {
                console.log("ENTROU NO 2 IF");
                return banco;
            }
        });

        const resultadoAindaNaoCobrados = bancosJaCobrados.concat(bancosNaoCobrados);

        return res.status(200).json({ resultadoAindaNaoCobrados });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = controladorBancosBuscaNaoCobrados;