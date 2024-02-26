const marvelContainer = document.querySelector("#marvel");
const dcContainer = document.querySelector("#dc");

const dialog = document.querySelector("dialog");

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



heroes.forEach(hero => {
    const card = `
        <div class="card ${hero.category}">
            <div class="card-header">
                <img src="${hero.img}" alt="img">
            </div>
            <div class="card-body">
                <h2>${(hero.name).replace("-", " ")}</h2>
                <button onclick="showHero(${hero.id})" class="button">
                    Ver 
                </button>
            </div>
        </div>
    `;
    if (hero.category == "marvel") {
        marvelContainer.innerHTML += card;
    }else{
        dcContainer.innerHTML += card;
    }
})


const showHero = (id) =>{
    const hero = heroes.find(hero => hero.id == id)
    dialog.innerHTML = `
        <button onclick="dialog.close()" class="button">
            X 
        </button>
        <div class="card">
            <div class="card-header">
                <img src="${hero.img}" alt="img">
            </div>
            <div class="card-body">
                <h2>${(hero.name).replace("-", " ")}</h2>

            </div>
        </div>
    `;
    dialog.showModal();
}


