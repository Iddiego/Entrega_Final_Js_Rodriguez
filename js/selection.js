//Funcion para que se mantenga la seleccion
function selectMuscle(muscle, container) {
    const selectedContainers = document.querySelectorAll('.selected');

    for (const selectedContainer of selectedContainers) {
        selectedContainer.classList.remove('selected');
    }

    container.classList.add('selected');
}



//Funcion para que aparezca en el buscador

function selectMuscle(muscleName, element) {
    document.getElementById("searchBar").value = muscleName;
}
