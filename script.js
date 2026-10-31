const cidadesPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó", "Brasileia", "Mâncio Lima", "Epitaciolândia", "Xapuri", "Porto Acre", "Plácido de Castro", "Acrelândia", "Senador Guiomard", "Capixaba", "Bujari", "Manoel Urbano", "Porto Walter", "Rodrigues Alves", "Marechal Thaumaturgo", "Assis Brasil"],
    AL: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "União dos Palmares", "Penedo", "São Miguel dos Campos", "Coruripe", "Campo Alegre", "Delmiro Gouveia", "Marechal Deodoro", "Santana do Ipanema", "Atalaia", "Girau do Ponciano", "Teotônio Vilela", "Pilar", "São Luís do Quitunde", "Maragogi", "Murici", "Porto Calvo"],
    AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tabatinga", "Maués", "Tefé", "Humaitá", "Iranduba", "Eirunepé", "São Gabriel da Cachoeira", "Benjamin Constant", "Lábrea", "Autazes", "Codajás", "Borba", "Nova Olinda do Norte", "Santo Antônio do Içá", "Manicoré"],
    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Porto Grande", "Mazagão", "Tartarugalzinho", "Pedra Branca do Amapari", "Vitória do Jari", "Calçoene", "Amapá", "Ferreira Gomes", "Cutias", "Itaubal", "Pracuúba", "Serra do Navio"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Juazeiro", "Itabuna", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso", "Eunápolis", "Santo Antônio de Jesus", "Valença", "Luís Eduardo Magalhães", "Guanambi"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixadá", "Pacajus", "Aquiraz", "Cascavel", "Quixeramobim", "Russas", "Canindé", "Tianguá", "Aracati", "Crateús", "Pacatuba"],
    DF: ["Brasília"],
    ES: ["Serra", "Vila Velha", "Cariacica", "Vitória", "Cachoeiro de Itapemirim", "Linhares", "São Mateus", "Guarapari", "Colatina", "Aracruz", "Viana", "Nova Venécia", "Barra de São Francisco", "Marataízes", "São Gabriel da Palha", "Santa Maria de Jetibá", "Castelo", "Itapemirim", "Domingos Martins", "Conceição da Barra"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Senador Canedo", "Itumbiara", "Catalão", "Jataí", "Planaltina", "Caldas Novas", "Santo Antônio do Descoberto", "Goianésia", "Inhumas", "Mineiros"],
    MA: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Pinheiro", "Chapadinha", "Santa Luzia", "Buriticupu", "Grajaú", "Itapecuru-Mirim", "Coroatá", "Barreirinhas", "Tutóia"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas", "Divinópolis", "Santa Luzia", "Ibirité", "Poços de Caldas", "Patos de Minas", "Pouso Alegre", "Teófilo Otoni", "Barbacena", "Sabará"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Sidrolândia", "Naviraí", "Nova Andradina", "Aquidauana", "Maracaju", "Paranaíba", "Amambai", "Rio Brilhante", "Coxim", "Caarapó", "Bonito", "Miranda", "Jardim", "Anastácio", "Aparecida do Taboado"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Sorriso", "Tangará da Serra", "Cáceres", "Primavera do Leste", "Lucas do Rio Verde", "Barra do Garças", "Alta Floresta", "Nova Mutum", "Pontes e Lacerda", "Juína", "Campo Novo do Parecis", "Guarantã do Norte", "Barra do Bugres", "Colíder", "Poconé", "Chapada dos Guimarães"],
    PA: ["Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas", "Castanhal", "Abaetetuba", "Cametá", "Marituba", "Bragança", "São Félix do Xingu", "Barcarena", "Altamira", "Tucuruí", "Paragominas", "Tailândia", "Breves", "Itaituba", "Redenção", "Salinópolis"],
    PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cajazeiras", "Cabedelo", "Guarabira", "Sapé", "Queimadas", "Mamanguape", "Pombal", "Monteiro", "São Bento", "Catolé do Rocha", "Pedras de Fogo", "Lagoa Seca", "Alagoa Grande", "Solânea"],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão", "Igarassu", "São Lourenço da Mata", "Santa Cruz do Capibaribe", "Abreu e Lima", "Ipojuca", "Serra Talhada", "Araripina", "Gravatá", "Carpina", "Goiana"],
    PI: ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano", "Barras", "Campo Maior", "União", "Altos", "Esperantina", "José de Freitas", "Pedro II", "Oeiras", "São Raimundo Nonato", "Miguel Alves", "Luís Correia", "Piracuruca", "Batalha", "Bom Jesus", "Canto do Buriti"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá", "Araucária", "Toledo", "Apucarana", "Pinhais", "Campo Largo", "Arapongas", "Almirante Tamandaré", "Umuarama", "Piraquara", "Cambé"],
    RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Macaé", "Magé", "Itaboraí", "Cabo Frio", "Angra dos Reis", "Nova Friburgo", "Barra Mansa", "Teresópolis", "Mesquita", "Nilópolis"],
    RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Ceará-Mirim", "Caicó", "Assu", "Currais Novos", "São José de Mipibu", "Nova Cruz", "Apodi", "Santa Cruz", "Touros", "Pau dos Ferros", "Areia Branca", "Extremoz", "Nísia Floresta", "Macau", "Pipa"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Guajará-Mirim", "Jaru", "Rolim de Moura", "Pimenta Bueno", "Ouro Preto do Oeste", "Buritis", "Machadinho d'Oeste", "Espigão d'Oeste", "Alta Floresta d'Oeste", "Nova Mamoré", "Candeias do Jamari", "São Miguel do Guaporé", "Presidente Médici", "Colorado do Oeste", "Cerejeiras"],
    RR: ["Boa Vista", "Rorainópolis", "Caracaraí", "Cantá", "Mucajaí", "Alto Alegre", "Pacaraima", "Bonfim", "Amajari", "Iracema", "Normandia", "Uiramutã", "Caroebe", "São João da Baliza", "São Luiz"],
    RS: ["Porto Alegre", "Caxias do Sul", "Canoas", "Pelotas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Erechim", "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha", "Bagé", "Bento Gonçalves", "Guaíba", "Ijuí"],
    SC: ["Joinville", "Florianópolis", "Blumenau", "São José", "Itajaí", "Chapecó", "Criciúma", "Palhoça", "Lages", "Balneário Camboriú", "Brusque", "Tubarão", "Jaraguá do Sul", "São Bento do Sul", "Navegantes", "Caçador", "Concórdia", "Indaial", "Gaspar", "Imbituba"],
    SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão", "Estância", "Tobias Barreto", "Simão Dias", "Nossa Senhora da Glória", "Propriá", "Itaporanga d'Ajuda", "Capela", "Porto da Folha", "Boquim", "Laranjeiras", "Neópolis", "Canindé de São Francisco", "Barra dos Coqueiros", "Umbaúba", "Poço Redondo"],
    SP: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "São José dos Campos", "Santo André", "Ribeirão Preto", "Osasco", "Sorocaba", "Mauá", "São José do Rio Preto", "Mogi das Cruzes", "Santos", "Diadema", "Jundiaí", "Piratininga", "Carapicuíba", "Bauru", "Itaquaquecetuba", "São Vicente"],
    TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins", "Araguatins", "Colinas do Tocantins", "Guaraí", "Tocantinópolis", "Formoso do Araguaia", "Miracema do Tocantins", "Dianópolis", "Augustinópolis", "Taguatinga", "Pedro Afonso", "Goiatins", "Xambioá", "Arraias", "Nova Olinda", "Babaçulândia"]
};

const selectEstado = document.getElementById("state");
const selectCidade = document.getElementById("city");
const customCityGroup = document.getElementById("custom-city-group");
const customCityInput = document.getElementById("custom_city");

// Monitora a mudança do Estado
selectEstado.addEventListener("change", function() {
    const estadoSelecionado = this.value;
    
    selectCidade.innerHTML = '<option value="">Selecione sua cidade</option>';
    esconderCampoCustomizado();
    
    if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
        selectCidade.disabled = false;
        
        // Insere as cidades do estado
        cidadesPorEstado[estadoSelecionado].forEach(function(cidade) {
            const option = document.createElement("option");
            option.value = cidade;
            option.textContent = cityEscaped(cidade);
            selectCidade.appendChild(option);
        });

        // Adiciona a opção "Outra cidade..." fixada no final da lista
        const optionOutra = document.createElement("option");
        optionOutra.value = "outra_cidade";
        optionOutra.textContent = "Outra cidade...";
        selectCidade.appendChild(optionOutra);

    } else {
        selectCidade.disabled = true;
        selectCidade.innerHTML = '<option value="">Selecione o estado primeiro</option>';
    }
});

// Monitora a mudança da Cidade
selectCidade.addEventListener("change", function() {
    if (this.value === "outra_cidade") {
        customCityGroup.style.display = "block";
        customCityInput.required = true;
        customCityInput.focus();
    } else {
        esconderCampoCustomizado();
    }
});

function esconderCampoCustomizado() {
    customCityGroup.style.display = "none";
    customCityInput.required = false;
    customCityInput.value = "";
}

function cityEscaped(str) {
    return str.replace(/备/g, 'be'); 
}


// ==================================================
// CÓDIGO DE ENVIO DO FORMULÁRIO PARA O APPS SCRIPT
// ==================================================
// Captura o formulário HTML
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    // Impede a página de recarregar
    event.preventDefault();

    // A URL do Apps Script que processará os dados do formulário
    const urlAppsScript = "https://script.google.com/macros/s/AKfycbyBh6yIIo5zH0wXrTrmVCsf9uKnrjg8iT3ucoXX2RUz5xKMaULaoZ4r6_g8ELGEammY/exec"; 

    // Altera temporariamente o texto do botão para dar feedback visual ao usuário
    const botaoSubmit = document.querySelector('.btn-submit');
    const textoOriginalBotao = botaoSubmit.textContent;
    botaoSubmit.textContent = "Cadastrando... Aguarde.";
    botaoSubmit.disabled = true;

    // Coleta todos os campos inseridos no formulário automaticamente
    const dadosFormulario = new FormData(formulario);

    // Envia os dados para a planilha usando o método POST
    fetch(urlAppsScript, {
        method: 'POST',
        body: dadosFormulario,
        mode: 'no-cors' // Necessário para evitar bloqueios de CORS com o Apps Script
    })
    .then(() => {
        // Como o modo 'no-cors' não traz a resposta de texto legível, 
        // assumimos o sucesso caso a requisição não gere um erro de rede.
        alert('Cadastro realizado com sucesso e enviado para a planilha!');
        formulario.reset(); 
        esconderCampoCustomizado();
    })
    .catch(erro => {
        console.error('Erro ao enviar dados:', erro);
        alert('Ocorreu um erro ao tentar salvar os dados. Tente novamente.');
    })
    .finally(() => {
        // Restaura o botão para o estado original
        botaoSubmit.textContent = textoOriginalBotao;
        botaoSubmit.disabled = false;
    });
});
