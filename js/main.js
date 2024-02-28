



/**
 * Carga de Datos desde el JSON espera a fetch
 */

let heroes = [];

document.addEventListener('DOMContentLoaded', async (e) => {
    try {
        const data = await fetch('https://david-albarracin.github.io/MARVEL_DC/data/data.json').then(res => res.json());
        heroes =  data.heroes;
        loadData(heroes);
    } catch (error) {
        alert('Error Al Cargar los Datos');
        console.log(error);
    }
});

/**
 * Definición de variables 
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
    const text = inputSearch.value.toLowerCase();
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
