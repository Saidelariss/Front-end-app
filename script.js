
document.getElementById('auditors').addEventListener('click', function(event) {
  const clickedOption = event.target;
  clickedOption.classList.toggle('clicked');
});

document.getElementById('frameworks').addEventListener('click', function(event) {
  const clickedOption = event.target;
  clickedOption.classList.toggle('clicked');
});

document.addEventListener("DOMContentLoaded", function() {
  var box = document.getElementById("myBox");

  // Vérifiez si la hauteur du contenu est supérieure à la hauteur du div
  if (box.scrollHeight > box.clientHeight) {
    box.style.overflow = "auto"; // Ajoutez la barre de défilement
  }
});
