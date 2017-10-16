// Displays font white on onmouseover and black onmouseleave for #spanish

document.getElementById("spanish").onmouseover = function () { mouseOver()}

function mouseOver () {
  document.getElementById("spanish").style.color="white";
}

document.getElementById("spanish").onmouseleave = function () { mouseLeave()}
function mouseLeave () {document.getElementById("spanish").style.color="black";
 }
