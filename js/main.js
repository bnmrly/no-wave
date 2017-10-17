// Shows ALL elements as white on mouseover and black on mo

// return an array called whitened of the elements with the class of language

var whitened = document.getElementsByClassName("language");

 // Create a function that loops through the array and 'whitens' all of the array elements

var displayWhite = function () {
  for (var i = 0; i < whitened.length; i++) {
   whitened[i].style.color= 'white';
  }
 }

 // call the function

 displayWhite ();

 // return an array called blackened of the elements with the class of language

 var blackened = document.getElementsByClassName("language");


  // Create a function that loops through the array and 'blackens' all of the array elements

  var displayBlack = function () {
    for (var i = 0; i < blackened.length; i++) {
     blackened[i].style.color= 'black';
    }
   }

    // call the function

    displayBlack ();
