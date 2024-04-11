document
  .getElementById("formClima") //Seleciona o forms que fizemos no index.html
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário

    const city = document.getElementById("cityInput").value; // Obtém o valor inserido no campo de entrada de cidade
    const cidadeFormatada = city.charAt(0).toUpperCase() + city.slice(1); // Formata o nome da cidade para ter a primeira letra maiúscula

    fetch(`http://localhost:3000/climatempo/${city}`) // Faz uma requisição para a rota do servidor que consulta o clima da cidade
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => { // Manipula os dados retornados pela API
        const tempoResult = document.getElementById("climaResult");  // Seleciona a div onde os resultados serão exibidos

        document.getElementById("climaResult").style.display = "block";

        if (data.Temperatura) { // Verifica se os dados de temperatura foram recebidos
          tempoResult.innerHTML = `
            
          <div class="clima-city-name">
          <i class="ph-fill ph-map-pin" id="pin_map"></i>
          <p id="cityResult">${cidadeFormatada}</p>
          <img src="${data.Flag}" class="flag-city">
        </div>
        <div class="clima-city-temp">
          <i class="ph ph-thermometer-simple"></i>
          <p id="tempResult">${data.Temperatura}ºC</p>
        </div>
        <div class="clima-city-icon">
          <p id="climaDescriptionResult">${data.Clima}</p>
          <img src="${data.Icone}">
        </div>
        <div class="clima-city-bot">
          <div class="clima-city-umidade">
            <i class="ph ph-drop"></i>
            <p id="umidadeResult">${data.Umidade}%</p>
          </div>
          <p class="espacamento">|</p>
          <div class="clima-city-vento">
            <i class="ph ph-wind"></i>
            <p id="ventoResult">${data.VelocidadeDoVento} m/s</p>
          </div>
          </div>
        
            `;
        } else {
          tempoResult.innerHTML = "Erro ao obter dados metereológicos!"; // Exibe uma mensagem de erro caso os dados não forem recebidos
        }
      });
  });
