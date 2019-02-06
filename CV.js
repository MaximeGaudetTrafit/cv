window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

//window.scrollY // Valeur du scroll en pixel
//document.body.offsetHeight // Hauteur totale de la page en pixel
//window.innerHeight // Hauteur de l'écran en pixel


deplacement = (window.innerHeight + window.scrollY)/ document.body.offsetHeight;

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});

function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
    
    // Calculez ici la valeur de déplacement à efectuer lors du scroll
	value = (document.body.offsetHeight*document.getElementById('progress_bar').value) - window.innerHeight;
    
    window.scroll(0, value) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}