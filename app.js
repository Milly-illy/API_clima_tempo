//bibliotecas necessárias
const express = require("express"); // Para criar o servidor web
const axios = require("axios"); // Para fazer requisições HTTP
const path = require("path"); // Para lidar com caminhos de arquivos
const cors = require("cors"); // Para permitir requisições CORS
const config = require("./config.json"); // Importando o arquivo de configuração
const apikey = config.apikey;  // Obtendo a chave de API do arquivo de configuração

// Inicializando o aplicativo Express e o configurando
const app = express();
app.listen(3000); //porta do servidor
app.use(cors()); // Habilitando o CORS para permitir solicitações de diferentes origens
app.use(express.json()); // Permitindo o uso de JSON nas solicitações e respostas
app.use(express.static(path.join(__dirname, "public")));

// Definindo uma rota para obter dados climáticos com base na cidade fornecida
app.get("/climatempo/:cidade", async (req, res) => {
  const city = req.params.cidade;

  try {
    // Fazendo uma requisição para a API de previsão do tempo
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}&units=metric`
    );
    // Verificando se a resposta foi bem-sucedida
    if (response.status === 200) {
      const clima = response.data.weather[0].description;
      const climaFormatado = clima.charAt(0).toUpperCase() + clima.slice(1);  // Formatando a descrição do clima
      const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;  // Ícone do clima
      const flag = `https://flagsapi.com/${response.data.sys.country}/flat/64.png`; // Bandeira do país

      // Criando um objeto com os dados climáticos relevantes
      const watherData = {
        Temperatura: response.data.main.temp_min,
        Umidade: response.data.main.humidity,
        VelocidadeDoVento: response.data.wind.speed,
        Clima: climaFormatado,
        Icone: icon,
        Flag: flag,
      };

      // Enviando os dados climáticos como resposta à solicitação
      res.send(watherData);
    } else {
      res
        // Se a resposta não for bem-sucedida, envie uma mensagem de erro
        .status(response.status).send({ erro: "Erro ao obter dados metereológicos" });  
    }
  } catch (error) {
    // Se ocorrer um erro durante a solicitação, envie uma mensagem de erro
    res.status(500).send({ erro: "Erro ao obter dados metereológicos", error });
  }
});
