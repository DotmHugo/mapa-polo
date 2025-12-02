// Dados dos Polos
const polosData = [
    {
        name: "Polo Ariquemes/RO",
        lat: -9.9088,
        lng: -63.0336,
        info: "Centro de Excelência em Educação e Tecnologia SENAI – José Fernandes de Moura, Rua Tancredo Neves, Nº 3822, Bairro Área Institucional. Ariquemes/RO.<br><br><strong>02/12, ÀS 18:30: Sala 02 - Laboratório de Informática</strong><br><strong>04/12,l ÀS 18:30: Sala 02 - Laboratório de Informática</strong><br><strong>06/12, às 8h30: Sala 02 - Laboratório de Informática</strong><br><strong>09/12, às 18h30: Sala 02 - Laboratório de Informática</strong>"
    },
    {
        name: "Polo Belo Horizonte/MG",
        lat: -20.1098,
        lng: -43.0535,
        info: "Belo Horizonte | Unidade Horto. SENAI BH - Horto, R. Santo Agostinho, 1717 - Horto Florestal, Belo Horizonte - MG.<br><br><strong>02/12, às 18h30: Bloco C - Laboratório 204</strong><br><strong>04/12, às 18h30: Bloco C - Laboratório 204</strong><br><strong>"
    },
    {
        name: "Polo Campinas/SP",
        lat: -22.9056,
        lng: -47.0608,
        info: "Faculdade de Tecnologia SENAI Roberto Mange, Rua Pastor Cicero Canuto de Lima, 71, São Bernardo - Vila Rialto, Campinas - SP.<br><br><strong>02/12, às 18h30: LAB A206</strong><br><strong>04/12, às 18h30: LAB A206</strong><br><strong>06/12, às 8h30: LAB A206</strong><br><strong>09/12, às 18h30: LAB A206</strong>"
    },
    {
        name: "Polo Campo Grande/MS",
        lat: -20.4667,
        lng: -54.6167,
        info: "Polo Campo Grande/MS. Faculdade SENAI da Construção - Avenida Rachid Neder, esquina com Rua Caxias do Sul – Bairro Cruzeiro.<br><br><strong>02/12, às 18h30: Laboratório de CAD 01, localizado no Bloco 03, térreo.</strong><br><strong>04/12, às 18h30: Laboratório de CAD 01, localizado no Bloco 03, térreo.</strong><br><strong>06/12, às 8h30: Laboratório de CAD 01, localizado no Bloco 03, térreo.</strong><br><strong>09/12, às 18h30: Laboratório de CAD 01"
    },
    {
        name: "Polo Contagem/MG",
        lat: -19.9329,
        lng: -44.0538,
        info: "Faculdade SENAI de Construção, Rua Dr. José Américo Cansado Bahia, 123, Cidade Insdustrial.<br><br><strong>02/12, às 18h30: Sala 5</strong><br><strong>04/12, às 18h30: Sala 5</strong><br><strong>09/12, às 18h30: Sala 5</strong>"
    },
    {
        name: "Polo Curitiba/PR",
        lat: -25.4284,
        lng: -49.2733,
        info: "Polo Curitiba/PR.  UNISENAI - Marginal Comendador Franco, Avenida, nº1341.<br><br><strong>02/12, às 18h30: Prédio II, Térreo</strong><br><strong>04/12, às 18h30: Prédio II, Térreo</strong><br><strong>06/12, às 8h30: Prédio II, Térreo</strong>"
    },
    {
        name: "Polo Florianópolis/SC",
        lat: -27.5945,
        lng: -48.5477,
        info: "Polo Florianópolis/SC.UNISENAI - Rodovia, Saco Grande.<br><br><strong>02/12, às 18h30: Sala de Atendimento ao Aluno (Coordenação Pedagógica)</strong><br><strong><br>04/12, às 18h30: Sala de Atendimento ao Aluno (Coordenação Pedagógica)</strong><br><strong>09/12, às 18h30: Sala de Atendimento ao Aluno (Coordenação Pedagógica)</strong><br><strong>"
    },
    /*{
        name: "Polo Goiânia/GO",
        lat: -16.6869,
        lng: -49.2643,
        info: "Faculdade SENAI FATESG, R. 227-A, 95 - Setor Leste Universitário, Goiânia - GO, 74610-155.<br><br><strong>SALA XXX</strong>"
    },*/
    {
        name: "Polo Porto Alegre/RS",
        lat: -30.0346,
        lng: -51.2177,
        info: "Avenida Assis Brasil, 8450, bairro Sarandi.<br><br><strong>02/12, às 18h30: Laboratório da Biblioteca (ao chegar, se apresentar na secretaria da escola)</strong><br><strong>04/12, às 18h30: Sala 340(ao chegar, se apresentar na secretaria da escola)</strong><br><strong>06/12, às 8h30: Sala 340 (ao chegar, se apresentar na secretaria da escola)</strong><br><strong>09/12, às 18h30: Laboratório da Biblioteca (ao chegar, se apresentar na secretaria da escola)</strong>"
    },
    {
        name: "Polo Salvador/BA",
        lat: -12.93873,
        lng: -38.386047,
        info: "Centro Universitário SENAI CIMATEC, Av Orlando Gomes, 1845, Piatã, Salvador/BA.<br><br><strong>02/12, às 18h30: Salas 2.1.6 e 2.1.2</strong><br><strong>04/12, às 18h30: Salas 2.1.6 e 2.1.2</strong><br><strong>06/12, às 8h30: Salas 2.1.6 e 2.1.2</strong><br><strong>09/12, às 18h30: Salas 2.1.6 e 2.1.4</strong>"
    },
    {
        name: "Polo Vitória/ES",
        lat: -20.3150,
        lng: -40.3128,
        info: "Avenida Marechal Mascarenhas de Moraes, 2235, Bento Ferreira.<br><br><strong>02/12, às 18h30: Biblioteca - Sala 5104 - 1º Andar</strong><br><strong>04/12, às 18h30: Biblioteca - Sala 5104 - 1º Andar</strong><br><strong>06/12, às 8h30: Biblioteca - Sala 5104 - 1º Andar</strong><br><strong>09/12, às 18h30: Biblioteca - Sala 5104 - 1º Andar</strong>"
    },
    {
        name: "Polo Fortaleza/CE",
        lat: -3.7319,
        lng: -38.5267,
        info: "Centro de Formação Profissional Antônio Urbano de Almeida, Avenida Padre Ibiapina, 1280, Fortaleza.<br><br><strong>02/12, às 18h30: SALA C1 - Próximo a Portaria 1</strong><br><strong>04/12, às 18h30: Sala C1 - próximo a Portaria 1</strong><br><strong>06/12, às 8h30: Sala C1 - próximo a Portaria 1</strong><br><strong>09/12, às 18h30: Sala C1 - próximo a Portaria 1</strong>"
    },
    {
       name: "Polo Brasília/DF",
        lat: -15.82273,
        lng: -48.06721,
        info: "SENAI Taguatinga - Área Especial nº 2, Setor C Norte.<br><br><strong>02/12, às 18h30: Biblioteca da Unidade Senai Taguatinga</strong><br><strong>04/12, às 18h30: Biblioteca da Unidade Senai Taguatinga</strong><br><strong>06/12, às 8h30: Biblioteca da Unidade Senai Taguatinga</strong><br><strong>09/12, às 18h30: Biblioteca da Unidade Senai Taguatinga</strong>"
    }
];

// Limites do mapa (Brasil)
//const southWest = L.latLng(-34.0, -75.0);
//const northEast = L.latLng(5.5, -34.0);
//const bounds = L.latLngBounds(southWest, northEast);

// Inicializa o mapa
const map = L.map('map', {
    //maxBounds: bounds,
    minZoom: 4,
}).setView([-14.235, -51.925], 4);

// TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcadores + Popups
polosData.forEach(polo => {
    const marker = L.marker([polo.lat, polo.lng]).addTo(map);

    // Popup sem indentação nenhuma
    const popupContent = 
`<strong>${polo.name}</strong><br>${polo.info}`;

    marker.bindPopup(popupContent).on('click', function () {
        this.openPopup();
    });
});
