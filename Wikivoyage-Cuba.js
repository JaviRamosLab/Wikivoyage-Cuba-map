const Viñales = document.querySelector('#PR');
const Havano = document.querySelector('#LH');
const Matanzas = document.querySelector('#MT');
const Cienfuegos = document.querySelector('#CF');
const SantaClara = document.querySelector('#VC');
const SanctiSpíritus = document.querySelector('#SS');
const Camagüey = document.querySelector('#CM');
const Holguín = document.querySelector('#HL');
const SantiagodeKubo = document.querySelector('#SC');
const Guantánamo = document.querySelector('#GT');
// Las Terrazas
// Trinidad
// Moa
// Baracoa

let urlTitle = "";

// PR - Viñales
Viñales.addEventListener('mouseenter', () => {
    Viñales.style.fill = '#0ae453';
});
Viñales.addEventListener('mouseout', () => {
    Viñales.style.fill = '';
})
Viñales.addEventListener('click', () => {
    urlTitle = 'Viñales';
    FetchData();
    Viñales.style.fill = '#e40ab5';
});

// LH - Havano
Havano.addEventListener('mouseenter', () => {
    Havano.style.fill = '#0ae453';
});
Havano.addEventListener('mouseout', () => {
    Havano.style.fill = '';
});
Havano.addEventListener('click', () => {
    urlTitle = 'Havano';
    FetchData();
});

// MT - Matanzas
Matanzas.addEventListener('mouseenter', () => {
    Matanzas.style.fill = '#0ae453';
});
Matanzas.addEventListener('mouseout', () => {
    Matanzas.style.fill = '';
});
Matanzas.addEventListener('click', () => {
    urlTitle = 'Matanzas';
    FetchData();
});

// CF - Cienfuegos
Cienfuegos.addEventListener('mouseenter', () => {
    Cienfuegos.style.fill = '#0ae453';
});
Cienfuegos.addEventListener('mouseout', () => {
    Cienfuegos.style.fill = '';
});
Cienfuegos.addEventListener('click', () => {
    urlTitle = 'Cienfuegos';
    FetchData();
});

// VC - SantaClara
SantaClara.addEventListener('mouseenter', () => {
    SantaClara.style.fill = '#0ae453';
});
SantaClara.addEventListener('mouseout', () => {
    SantaClara.style.fill = '';
});
SantaClara.addEventListener('click', () => {
    urlTitle = 'Santa_Clara_(Kubo)';
    FetchData();
});

// SS - SanctiSpíritus
SanctiSpíritus.addEventListener('mouseenter', () => {
    SanctiSpíritus.style.fill = '#0ae453';
});
SanctiSpíritus.addEventListener('mouseout', () => {
    SanctiSpíritus.style.fill = '';
});
SanctiSpíritus.addEventListener('click', () => {
    urlTitle = 'Sancti_Spíritus';
    FetchData();
});

// CM - Camagüey
Camagüey.addEventListener('mouseenter', () => {
    Camagüey.style.fill = '#0ae453';
});
Camagüey.addEventListener('mouseout', () => {
    Camagüey.style.fill = '';
});
Camagüey.addEventListener('click', () => {
    urlTitle = 'Camagüey';
    FetchData();
});

// HL - Holguín
Holguín.addEventListener('mouseenter', () => {
    Holguín.style.fill = '#0ae453';
});
Holguín.addEventListener('mouseout', () => {
    Holguín.style.fill = '';
});
Holguín.addEventListener('click', () => {
    urlTitle = 'Holguín';
    FetchData();
});

// SC - SantiagodeKubo
SantiagodeKubo.addEventListener('mouseenter', () => {
    SantiagodeKubo.style.fill = '#0ae453';
});
SantiagodeKubo.addEventListener('mouseout', () => {
    SantiagodeKubo.style.fill = '';
});
SantiagodeKubo.addEventListener('click', () => {
    urlTitle = 'Santiago_de_Kubo';
    FetchData();
});

// GT - Guantánamo
Guantánamo.addEventListener('mouseenter', () => {
    Guantánamo.style.fill = '#0ae453';
});
Guantánamo.addEventListener('mouseout', () => {
    Guantánamo.style.fill = '';
});
Guantánamo.addEventListener('click', () => {
    urlTitle = 'Guantánamo_(urbo)';
    FetchData();
});

function FetchData() {
fetch(`https://eo.wikivoyage.org/w/api.php?format=json&origin=*&action=parse&page=${urlTitle}`)
    .then(res => res.json())
    .then(data => fecthData(data))
    .catch(err => console.log(err));
    
    const fecthData = (data) => {
    let body = `${data.parse.text['*']}`
    bodyHtml = body.replace(/\n*/gm, "").replace(/"\/wiki\//gm, "https://eo.wikivoyage.org/wiki/").replace(/\/\/upload.wikimedia.org/gm, "https://upload.wikimedia.org");
    let pageTitle = `${data.parse.title}`
    document.getElementById('wikivoyageCuba').innerHTML = `<hr><br><h1>${pageTitle}</h1> <br> ${bodyHtml} <br><br> 
    <a href="https://eo.wikivoyage.org/wiki/${urlTitle}" class="button button2">${pageTitle}</a>`
    }
};