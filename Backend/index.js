//DETALHES SOBRE
//COMO EU TIVE O CONTRA TEMPO TENTANDO FAZER COM O HANDLEBARS
//EU PREFERI N MEXER COM VALIDATOR COMO A ULTIMA REGRA DA ATV PEDE LA
//INDEX BEM BAGUNÇADO COM ROTA E TUDO MISTURADO, N MODULARIZADO, PODERIA TER
//COLOCADO AS ROTAS EM OUTRO LUGAR, ENFIM.



import app from "./app.js"
app.use(app.json());

import sequelize from "sequelize";
const Sequelize = new sequelize('atv4',"root","123456789",{
    host: "localhost",
    dialect: "mysql"
}) //CONECTANDO AO DB
// OS PARAMETROS EM ORDEM SÃO O NOME DO DB, O USUARIO, SENHA, dentro dos {}
// O LOCAL DO DB E A LINGUAGEM DO DB

Sequelize.authenticate().then(function(){ //SEQUELIZE.AUTHENTICATE CONECTANDO NO BD
    console.log("Conectado com Sucesso")
}).catch(function(erro){
    console.log("Falha ao se Conectar", erro)
}
)

const Banco = sequelize.define('Banco', {
    nome: DataTypes.STRING,
  }) 

app.get("/bancos", async (req, res) => {
  try {
    const bancos = await db.Banco.findAll({
      attributes: ['id', 'nome'],
    })
    res.json(bancos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar bancos.' })
  }
}) 

app.get("/bancos/:id", async (req, res) => {
    const {id} = req.params;
  
try {
    const banco = await Banco.findByPk(id)
      if (!banco) {
    return res.status(404).json({ error: 'Banco não encontrado.' })
    }
    res.json(banco)
} catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar banco.' })
}
});

app.post("/simulacaof",async(req, res) => {
  const { valorDesejado, idBanco, numParcelas } = req.body
  try {
    const banco = await Banco.findByPk(idBanco)

    if (!banco) {
      return res.status(404).json({ error: 'Banco não encontrado.' })
    }
    const taxaJuros = 0.1; //sla meti essa
    const valorJuros = valorDesejado * taxaJuros
    const valorTotal = valorDesejado + valorJuros
    const valorParcela = valorTotal / numParcelas
    res.json({
      valorParcela,
      valorTotal,
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao simular' })
  }
})

Banco.sync()

app.get("/", function(req,res){
    res.send("Seja bem vindo a atv4")
})