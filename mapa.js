// Dados dos Polos (Use as mesmas coordenadas do exemplo anterior)
const polosData = [
    { name: "Polo Ariquemes/RO", lat: -9.9088, lng: -63.0336, info: "Polo Ariquemes, Centro de Excelência em Educação e Tecnologia SENAI – José Fernandes de Moura, Rua Tancredo Neves, Nº 3822, Bairro Área Institucional, CEP: 76.872-838. Ariquemes/ RO. <strong><br> SALA XXX</strong> " },
    { name: "Polo Belo Horizonte/MG", lat: -19.9167, lng: -43.9345, info: "Unidade MG. Belo Horizonte | Unidade Horto. SENAI BH - Horto, R. Santo Agostinho, 1717 - Horto Florestal, Belo Horizonte - MG, 31035-480, <strong><br> SALA XXX </strong>" },
    { name: "Polo Campinas/SP", lat: -22.9056, lng: -47.0608, info: "Polo de São Paulo. Faculdade de Tecnologia  SENAI Roberto Mange, Rua Pastor Cicero Canuto de Lima, 71 São Bernardo - Vila Rialto, Campinas - SP, 13036-210. <strong> <br>SALA XXX </strong>"},
    { name: "Polo Campo Grande/MS", lat: -20.4667, lng: -54.6167, info: "Polo Campo Grande/MS." },
    { name: "Polo Contagem/MG", lat: -19.9329, lng: -44.0538, info: "Polo Contagem/MG. Faculdade SENAI de Construção, Rua Rachid Neder, 1939. Bairro Cruzeiro, Campo Grande/MS. <strong><br>SALA XXX</strong> " },
    { name: "Polo Curitiba/PR", lat: -25.4284, lng: -49.2733, info: "Polo Curitiba/PR." },
    { name: "Polo Florianópolis/SC", lat: -27.5945, lng: -48.5477, info: "Polo Florianópolis/SC." },
    { name: "Polo Goiânia/GO", lat: -16.6869, lng: -49.2643, info: "Polo Goiânia/GO. Faculdade SENAI FATESG, R. 227-A, 95 - Setor Leste Universitário, Goiânia - GO, 74610-155. <strong><br>SALA XXX</strong>. " },
    { name: "Polo Porto Alegre/RS", lat: -30.0346, lng: -51.2177, info: "Polo Porto Alegre/RS. Faculdade de Tecnologia SENAI Porto Alegre, <strong>SALA XXX</strong>" },
    { name: "Polo Salvador/BA", lat: -12.93873, lng: -38.386047, info: "Polo Salvador/BA. Centro Universitário SENAI CIMATEC, Av Orlando Gomes, 1845, Piatã, Salvador/BA. <strong><br>SALA XXX</strong>." },
    { name: "Polo Vitória/ES", lat: -20.3150, lng: -40.3128, info: "Polo Vitória/BA. SENAI Vitória - Centro de Educação e Tecnologia Arivaldo Silveira Fontes, <strong><br>SALA XXX</strong>." },
    { name: "Polo Fortaleza/CE", lat: -3.7319, lng: -38.5267, info: "Polo Fortaleza/CE. Centro de Formação Profissional Antônio Urbano de Almeida,Avenida Padre Ibiapina, 1280, Fortaleza, CEP: 60010.690. <strong> SALA XXX</strong>. " },
];

// 1. Inicializa o Mapa
// O mapa é criado no div com id 'map', centralizado no centro do Brasil (lat/lng) com zoom 4.
const map = L.map('map').setView([-14.235, -51.925], 4); // Centro do Brasil (latitude, longitude), Zoom

// 2. Adiciona o Tile Layer (a camada visual do mapa - OpenStreetMap)
// L.tileLayer define qual provedor de mapas será usado.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 3. Adiciona os Marcadores (Polos)
polosData.forEach(polo => {
    // Cria um marcador para cada polo
    const marker = L.marker([polo.lat, polo.lng]).addTo(map);

    // Adiciona uma Janela de Informação (Popup) ao marcador
    marker.bindPopup(`
        <strong>${polo.name}</strong><br>
        ${polo.info}
    `).on('click', function () {
        // Abre o popup ao clicar
        this.openPopup();
    });
});