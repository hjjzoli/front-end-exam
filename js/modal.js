var buttons = document.querySelectorAll('.myBtn');

var modals = document.querySelectorAll('.myModal');

var span = document.querySelectorAll(".close");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', createButtonClickHandler(i));
}

function createButtonClickHandler(index) {
  return function() {
    hideAllModals();

    modals[index].style.display = 'block';
  };
}

function createButtonClickHandler(index){
  return function() {

    hideAllModals();

    modals[index].style.display = 'block';

    var closeButton = modals[index].querySelector('.close');
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        hideModal(index);
      });
    }


window.addEventListener('click', function(event) {
  if (event.target === modals[index]) {
    hideModal(index);
  }
});
};
}

function hideAllModals() {
  for (var i = 0; i < modals.length; i++) {
    modals[i].style.display = 'none';
  }
}

function hideModal(index) {
  modals[index].style.display = 'none';
}

