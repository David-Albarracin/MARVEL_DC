const heroes = [
    {
        id: "1",
        category: "marvel",
        name: "spider-man",
        img: "https://cdn.superaficionados.com/imagenes/1-personajes-de-marvel-spider-man-cke.jpg",
        description: "Spider-Man es el alter ego de Peter Parker, un joven de Queens que fue mordido por una araña radioactiva y obtuvo poderes similares a los del arácnido. Ha aparecido en múltiples medios atados a Marvel y, para la generación actual, su gran debut en la gran pantalla fue en el 2002.",
        created_at: " 1962"
    },
    {
        id: "2",
        category: "marvel",
        name: "iron-man",
        img: "https://cdn.superaficionados.com/imagenes/2-personajes-de-marvel-iron-ma-cke.jpg",
        description: `
            Iron Man es el alter-ego de Tony Stark, un filántropo multimillonario que, luego de un secuestro, debe construir un aparato para mantenerse con vida. Esto lo lleva a crear un traje de alta tecnología que eventualmente usa como herramienta para luchar contra el crimen.
        `, 
        created_at: " 1963"
    },
    {
        id: "3",
        category: "marvel",
        name: "capitan-america",
        img: "https://cdn.superaficionados.com/imagenes/3-personajes-de-marvel-capitan-america-cke.jpg",
        description: `
            Iron Man es el alter-ego de Tony Stark, un filántropo multimillonario que, luego de un secuestro, debe construir un aparato para mantenerse con vida. Esto lo lleva a crear un traje de alta tecnología que eventualmente usa como herramienta para luchar contra el crimen.
        `, 
        created_at: " 1963"
    },
    {
        id: "4",
        category: "marvel",
        name: "doctor-strange",
        img: "https://cdn.superaficionados.com/imagenes/5-personajes-de-marvel-doctor-strange-cke.jpg",
        description: `
            Stephen Strange, que adopta el seudónimo de Doctor Strange, solía ser un cirujano egocéntrico. Luego de un accidente de tránsito, es incapaz de operar a sus pacientes, y buscando una forma de curarse se encuentra con El Anciano, el Hechicero Supremo.
        `, 
        created_at: " 1963"
    },
    {
        id: "5",
        category: "marvel",
        name: "scarlet-witch",
        img: "https://cdn.superaficionados.com/imagenes/4-personajes-de-marvel-la-bruja-escarlata-cke.jpg",
        description: "Wanda Maximoff es un personaje que también lleva el alias de la Bruja Escarlata.",
        created_at: "1964"
    },
    {
        id: "6",
        category: "marvel",
        name: "Black Widow",
        img: "https://cdn.superaficionados.com/imagenes/6-personajes-de-marvel-black-widow-cke.jpg",
        description: "Black Widow, conocida también como Natasha Romanoff, es una asesina entrenada de origen ruso.",
        created_at: "1964"
    },
    {
        id: "7",
        category: "marvel",
        name: "doctor-doom",
        img: "https://cdn.superaficionados.com/imagenes/7-personajes-de-marvel-doctor-doom-cke.jpg",
        description: "El Doctor Victor Von Doom es un supervillano asociado con el grupo de superhéroes Los Cuatro Fantásticos.",
        created_at: "1962"
    },

    {
        id: "8",
        category: "dc",
        name: "batman",
        img: "https://sm.ign.com/t/ign_es/screenshot/default/02-batman_ntp8.960.jpg",
        description: "Batman, también conocido como Bruce Wayne, es un superhéroe de DC Comics. Es un millonario que combate el crimen en Gotham City.",
        created_at: "1939"
    },
        
    {
        id: "9",
        category: "dc",
        name: "Superman",
        img: "https://sm.ign.com/t/ign_es/screenshot/default/01-superman_595m.960.jpg",
        description: "Superman, también conocido como Clark Kent, es uno de los superhéroes más icónicos de DC Comics. Es un alienígena que lucha por la justicia en Metrópolis.",
        created_at: "1938"
    },
        
    {
        id: "10",
        category: "dc",
        name: "wonder-woman",
        img: "https://sm.ign.com/t/ign_es/screenshot/default/03-wonder-woman_qst1.960.jpg",
        description: "Wonder Woman, también conocida como Diana Prince, es una princesa amazona y una de las principales heroínas de DC Comics.",
        created_at: "1941"
    },
    {
        id: "12",
        category: "dc",
        name: "green-lantern",
        img: "https://sm.ign.com/t/ign_es/screenshot/default/14-kyle-rayner_bkkp.960.jpg",
        description: "Green Lantern, también conocido como Hal Jordan, es miembro del Cuerpo de Linternas Verdes, una fuerza policial intergaláctica.",
        created_at: "1940"
    },
        
    {
        id: "13",
        category: "dc",
        name: "aquaman",
        category: "dc",
        img: "https://sm.ign.com/t/ign_es/screenshot/default/10-aquaman_shc1.960.jpg",
        description: "Aquaman, también conocido como Arthur Curry, es el rey de la Atlántida y un miembro de la Liga de la Justicia. Tiene habilidades acuáticas.",
        created_at: "1941"
    },
        
    {
        id: "14",
        category: "dc",
        name: "cyborg",
        img: "https://sm.ign.com/t/ign_es/screenshot/default/23-cyborg_zt15.960.jpg",
        description: "Cyborg, también conocido como Victor Stone, es un superhéroe mitad humano y mitad máquina. Es miembro de la Liga de la Justicia.",
        created_at: "1980"
    },
        
    {
        id: "15",
        category: "dc",
        name: "catwoman",
        img: "https://sm.ign.com/t/ign_es/screenshot/default/07-catwoman_sjz3.960.jpg",
        description: "Durante muchos años, Catwoman no habría tenido lugar en una lista de los mejores héroes de DC. Pero poco a poco ha hecho la transición de antagonista a defensora de Gotham en las últimas décadas. Selina Kyle puede ser una ladrona (posiblemente la mejor del mundo), pero también lucha ferozmente por quienes le importan",
        created_at: "1955"
    }

];

/**
 * 
 */


const marvelContainer = document.querySelector("#marvel");
const dcContainer = document.querySelector("#dc");

const selectCategory = document.querySelector('#selectCategory');
const searchBtn = document.querySelector('#searchBtn')
const inputSearch = document.querySelector('#searchInput')

const dialog = document.querySelector("dialog");


/**
 * 
 * @param {Array} heroes 
 * @param {String} category
 * Filtrar y Mostrar Heroes  
 */

const loadData = (heroes) => {
    //Reiniciar el Contenedor
    marvelContainer.innerHTML = ``
    dcContainer.innerHTML = ``

    //Recorrer los Heroes e ir Agregándolos Según Corresponda 
    heroes.forEach(hero => {
        const card = `
            <div class="card ${hero.category}">
                <div class="card-header">
                    <img src="${hero.img}" alt="${hero.name}">
                </div>
                <div class="card-body">
                    <h2>${(hero.name).replace("-", " ")}</h2>
                    <button onclick="showHero(${hero.id})" class="button">
                        Ver 
                    </button>
                </div>
            </div>
        `;
        hero.category == "marvel"? marvelContainer.innerHTML += card : dcContainer.innerHTML += card;
    })

    //Cambio del Titulo
    loadTitles()
}

//Cargamos Los Heroes
loadData(heroes);


/**
 * Verifica y Modifica el Estado del Titulo
 */
function loadTitles() {

    dcContainer.firstChild? 
        document.querySelector('#dcTitle').classList.remove("d-none") : 
        document.querySelector('#dcTitle').classList.add("d-none");

    marvelContainer.firstChild? 
        document.querySelector('#marvelTitle').classList.remove("d-none") : 
        document.querySelector('#marvelTitle').classList.add("d-none");
}

/**
 * 
 * @param {string} id 
 * Nos Permite Buscar y Mostrar el Model
 * showDialog() Propiedad de la etiqueta <dialog>
 */
const showHero = (id) =>{
    const hero = heroes.find(hero => hero.id == id)

    //quemas onclick="dialog.close()" para cerrar el dialogo cuando sea necesario 
    dialog.innerHTML = `
        <div class="dialog-buttons">
            <button onclick="dialog.close()" class="button">
                <i class='bx bx-arrow-back'></i>
            </button>
            <button onclick="dialog.close()" class="button">
                <i class='bx bx-x'></i>
            </button>
        </div>
        <div class="dialog">
            <div class="card-header">
                <img src="${hero.img}" alt="img">
            </div>
            <div class="dialog-body">
                <h2>${(hero.name).replace("-", " ")}</h2>
                <p>${hero.description}</p>
                <span class="text-color-red">${hero.created_at}</span>
            </div>
        </div>
    `;
    dialog.showModal();
}


selectCategory.addEventListener('change', (e) =>{
    //Tomamos el Valor que Cambio
    const categorySelect = e.target.value;

    //Filtramos Los Heroes
    const heroesFilter =  heroes.filter(({category}) => category == categorySelect)

    //Comprobamos si son todos de lo Contrario Cargamos de Nuevo todos los heroes 
    categorySelect == "all"? loadData(heroes) : loadData(heroesFilter)
})

/**
 * Función Para Buscar Héroe y Insertarlo en pantalla
 * @returns En Caso de No Encontrar Héroe Retorna una Alerta
 */
const searchHero = () => {
    //Reiniciamos los Contenedores
    marvelContainer.innerHTML = ``
    dcContainer.innerHTML = ``

    //Tomamos el Valor que Exista en el Input de Search
    const text = inputSearch.value;
    //Buscamos el Héroe en heroes con un includes para tener mas rango
    const hero = heroes.find(hero => hero.name.includes(text) ? hero : null);

    //Verificamos el hero
    if(!hero || text == ""){
        loadData(heroes)
        inputSearch.value = ""
        return alert("No Se Encontraron Resultados")
    }

    const card =  `
    <div class="">
        
        <div class="">
            <img src="${hero.img}" alt="img">
        </div>
        <div class="">
            <h2 class="text-color">${(hero.name).replace("-", " ")}</h2>
            <p class="text-color">${hero.description}</p>
            <span class="text-color-red">${hero.created_at}</span>
        </div>
        <div class="d-flex justify-content-between my-2">
            <button onclick="(loadData(heroes), inputSearch.value = '')" class="button">
                <i class='bx bx-arrow-back'></i>
            </button>
            <button onclick="(loadData(heroes), inputSearch.value = '')" class="button">
                <i class='bx bx-x'></i>
            </button>
        </div>
    </div>
    `

    hero.category == "marvel"? marvelContainer.innerHTML = card : dcContainer.innerHTML = card;
    loadTitles()
}

//Eventos Para Search 
inputSearch.addEventListener('keypress', (e) => e.key == "Enter"? searchHero() : "")
searchBtn.addEventListener('click', (e) => searchHero())
