var modal = document.querySelector('.modal');
var closeButton = document.querySelector('.modal .close');
var anchors = document.querySelectorAll('.strip a');

closeButton.addEventListener('click', function(e){
  e.preventDefault();
  modal.style.display = 'none';
})
anchors.forEach(a => a.addEventListener('click', function(e){
  e.preventDefault();
  var img = this.querySelector('img');
  var modalImg = modal.querySelector('img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
  TweenMax.from('.modal', 0.3, {opacity: 0, scale: 0.85});
}));