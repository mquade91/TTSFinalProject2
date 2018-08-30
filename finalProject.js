//Get the cards that users click on
var card = document.getElementsByClassName('card');
//Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn')
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//function to make modal appear
function modalAppear() {
  modal.style.display = 'block';
}
// Loops over all the cards on the page for OPEN//
for (var i = 0; i < card.length; i++) {
  //Listen for OPEN click on a card class
  card[i].addEventListener('click', modalAppear, false);
}

//function to CLOSE modal
function closeModal() {
  modal.style.display = 'none';
}
//Listen for click on 'x' button CLOSE modal
closeBtn.addEventListener('click', closeModal)

//function to close modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
//Listen for click outside modal
window.addEventListener('click', clickOutside)

