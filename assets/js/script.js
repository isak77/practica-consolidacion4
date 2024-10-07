
/*var contenidoUno = document.querySelector('#Personajes Principales')
function traer(){
    fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => {    
        alert(`nombre: ${data.results[0].name}, altura: ${data.results[0].height}, peso: ${data.results[0].mass}`);
  

   })
}*/
async function fetchAllCharacters() {
    let url = 'https://swapi.dev/api/people/';
    let allCharacters = [];

    while (url) {
        const response = await fetch(url);
        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        url = data.next; // URL de la siguiente página, o null si no hay más páginas
    }

    return allCharacters;
}
//traer todos los personajes y mostrar solos los de 0 a 6
async function personajesPrincipales() {
    const personajes = await fetchAllCharacters();
    let html = '';
    let startIndex = 0; // Índice de inicio para personajes principales
    let endIndex = 5; // Índice de fin para personajes principales
    for (let i = startIndex; i < endIndex; i++) {
        if (i < personajes.length) {
            html += `<p><strong>Nombre:</strong> ${personajes[i].name}, <strong>Altura (cms):</strong> ${personajes[i].height}, <strong>Peso:</strong> ${personajes[i].mass}(Kgs)</p>`;
        } else {
            alert("No hay suficientes personajes en la respuesta.");
            break;
        }
    }
    mostrarPrincipal(html);
}

function mostrarPrincipal(html) {
    const infoDiv = document.getElementById('personajesPrincipales');
    infoDiv.innerHTML = html;
    infoDiv.style.display = 'block';
}

document.getElementById('btnPrincipal').onclick = personajesPrincipales;

//traer todos los personajes y mostrar solos los del 6 al 18
async function personajesSegundarios() {
    const personajes = await fetchAllCharacters();
    let html = '';
    let startIndex = 6; // Índice de inicio para personajes secundarios
    let endIndex = 12; // Índice de fin para personajes secundarios
    for (let i = startIndex; i < endIndex; i++) {
        if (i < personajes.length) {
            html += `<p><strong>Nombre:</strong> ${personajes[i].name}, <strong>Altura (cms):</strong> ${personajes[i].height}, <strong>Peso:</strong> ${personajes[i].mass}(Kgs)</p>`;
        } else {
            alert("No hay suficientes personajes en la respuesta.");
            break;
        }
    }
    mostrarSegundarios(html);
}
function mostrarSegundarios(html) {
    const infoDiv = document.getElementById('personajesSegundarios');
    infoDiv.innerHTML = html;
    infoDiv.style.display = 'block';
}

document.getElementById('btnSegundarios').onclick = personajesSegundarios;
// Otros personajes


//traer todos los personajes y mostrar solos los de 12 al 18
async function otrosPersonajes() {
    const personajes = await fetchAllCharacters();
    let html = '';
    let startIndex = 12; // Índice de inicio para personajes secundarios
    let endIndex = 18; // Índice de fin para personajes secundarios
    for (let i = startIndex; i < endIndex; i++) {
        if (i < personajes.length) {
            html += `<p><strong>Nombre:</strong> ${personajes[i].name}, <strong>Altura (cms):</strong> ${personajes[i].height}, <strong>Peso:</strong> ${personajes[i].mass}(Kgs)</p>`;
        } else {
            alert("No hay suficientes personajes en la respuesta.");
            break;
        }
    }
    mostrarOtrosPersonaes(html);
}
function mostrarOtrosPersonaes(html) {
    const infoDiv = document.getElementById('otrosPersonajes');
    infoDiv.innerHTML = html;
    infoDiv.style.display = 'block';
}

document.getElementById('btnOtrosPersonajes').onclick = otrosPersonajes;






