const knex = require("../../conexoes/conexao");

const controladorFeiraListar = async (req, res) => {
    try {
        const feiras = await knex("feiras");

        if (!feiras) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" });
        }

        return res.status(200).json(feiras);

    } catch (error) {
        res.status(500).json(error.message);
    }
}


module.exports = controladorFeiraListar;