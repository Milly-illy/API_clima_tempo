##API CLIMA TEMPO##

INDEX.HTML

Esse código HTML define a estrutura básica de uma página da web para consultar o clima. Ele inclui elementos como metadados, título, ícone, estilos, fontes, um vídeo de fundo, um cabeçalho com logotipo e menu de navegação, um formulário para inserir o nome de uma cidade e consultar o clima, uma seção para exibir os resultados da consulta, e um script JavaScript para tornar o formulário interativo e lidar com a exibição dos resultados. Comentários são usados ao longo do código para fornecer explicações e instruções adicionais para os desenvolvedores.

APP.JS

Usamos o **Get** para definir uma rota para obter dados climáticos de cidade pedida
Usamos o **Try** para poder executar um bloco de códigos onde pode ocorrer erros 
**if** usamos para colocar a opção certa e o **else** para colocar a opção errada
O **catch** serve para para capturar exceções que ocorrem dentro de um bloco try e permite que você tome medidas específicas para lidar com essas exceções.
Usamos o **res** para fazer aparecer algo

Esse código Node.js usa o framework Express para criar um servidor web que permite consultar o clima de uma cidade. Ele usa o módulo Axios para fazer requisições HTTP à API de previsão do tempo (OpenWeatherMap). O servidor responde a solicitações GET para a rota "/climatempo/:cidade", onde ":cidade" é o nome da cidade para a qual o clima é consultado. A chave de API é obtida de um arquivo de configuração externo. Se a resposta da API for bem-sucedida, os dados climáticos são formatados e enviados como resposta. Se houver erro na requisição ou na resposta da API, uma mensagem de erro é enviada como resposta.

SCRIPT.JS

Nesse arquivo, ele pega o nome da cidade que você digitou, pede para o servidor de clima informações sobre essa cidade, e depois mostra essas informações na tela. Se algo der errado e ele não conseguir as informações, ele diz "Ops, algo deu errado!".

Usamos o **fetch** para fazer solitações
Usamos o **then** para verificar se ele consegue obter as respostas da API
O **JSON** é um formato de dados leve e de fácil leitura que é usado para troca de dados entre um servidor e um cliente

STYLE.CSS 

Esse código CSS define estilos para uma página web que exibe informações climáticas. Ele controla o layout, cores, fontes e tamanhos de vários elementos da página, como o cabeçalho, formulário de consulta, resultados do clima, entre outros. Além disso, utiliza media queries para garantir que a página seja responsiva e se adapte bem a diferentes tamanhos de tela, proporcionando uma boa experiência de usuário em dispositivos móveis e desktops.
