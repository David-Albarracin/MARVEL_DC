![css](https://raw.githubusercontent.com/David-Albarracin/README_MATERIALS/main/css-html-js.png)

# Descripción
Pagina web de algunos heroes de Marvel y DC con sus opciones de búsqueda y filtrado 


## Código

Empezamos en el `Index.html` donde vamos a encontrar la estructura del proyecto. En el header encontramos el select que nos ayuda a filtrar y el cuadro de texto para realizar las búsquedas. En el `main` encontramos la parte donde se muestran los héroes de Marvel y DC dentro de el encontramos el dialog que nos ayuda a mostrar mas información del personaje.

Aquí hay una descripción de los elementos dentro del `main`:

- **Marvel Section**: Esta sección contiene el título "HEROES DE MARVEL" junto con el logotipo de Marvel y una imagen. Luego, hay un contenedor `<div>` con el `id="marvel"` donde se muestran los héroes de Marvel.

- **DC Section**: Similar a la sección de Marvel, esta sección contiene el título "HEROES DE DC" junto con el logotipo de DC y una imagen. Luego, hay un contenedor `<div>` con el `id="dc"` donde se muestran los héroes de DC.

- **Dialog Element**: Este elemento `<dialog>` Se Muestra mas información del héroe en un dialog para que .

Continuamos con las clases de `style.css` donde encontramos el la primera sección dedicada a el root donde creamos la variables de estilos y removemos algunos estilos por defecto del html luego seguimos con la sección de layout donde encontramos algunas clases comunes que nos ayudan cambiar el display del contenedor a agregar margenes entre otros luego algunas clases reusables para los títulos y continuamos con el header 
```
.header {
    //Nos ayuda a Volver el Contenedor flexible le agrega un alto predefinido y alinea el contenido al centro
}

.input {
    // Creamos un estilo de input mas agradable con un padding y un border radius de 25px
}

.search {
    //Hacemos el contenedor relativo para y le agregamos un padding en x de 2rem
}

.search input{
    //Agregamos el un tamaño de 300px responsivo para el input 
}

.search label{
    //Ocultamos el label 
}

.search button{
    //Movemos el Botón de buscar para ubicar lo en la parte lateral derecha del input con un border de 100% 
}

.search button i{
    //Cambiamos el tamaño del icono
}

```

Ahora el `main.js` que nos ayuda a cargar dinámica mente los heroes y nos ayuda a controlar los eventos que el usuario realize en
la pagina para ello primero hacemos referencia a los elementos mencionados anteriormente en el html y los guardamos en unas constantes 
el primer paso es pedir los datos para ello ya contamos con los datos localmente hacemos referencia a la variable heroes