
// Función para mostrar el menú responsivo
let x = document.getElementById("nav")

function responsiveMenu() {
    (x.className === "") ? x.className = "responsive" : x.className = ""
}


/* Función para cambiar la apariencia visual del menú de navegación y ocultarlo(menú) cuando el usuario selecciona una opción */

function seleccionar(link) {
    let opciones = document.querySelectorAll("#links a");
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    let x = document.getElementById("nav");
    x.className = "";
}


/* Detectar la posición del scroll y resaltar los elementos del menú de navegación 
        correspondientes a medida que el usuario se desplaza por la página
*/

// Obtener los elementos del menú de navegación
const menuItems = document.querySelectorAll('.nav-ul li');

// Función para resaltar el elemento de menú activo
function highlightMenuItem() {
    const scrollPosition = window.scrollY + 350//obtener la posición actual del scroll verticalmente;

    menuItems.forEach(item => {
        const section = document.querySelector(item.querySelector('a').getAttribute('href'));

        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            item.querySelector('a').classList.add('seleccionado');
        } else {
            item.querySelector('a').classList.remove('seleccionado');
        }
    });
}

// Agrega un evento de desplazamiento para actualizar el resaltado del menú
window.addEventListener('scroll', highlightMenuItem);

// Ejecuta la función una vez al cargar la página para resaltar el elemento de menú inicial
highlightMenuItem();
