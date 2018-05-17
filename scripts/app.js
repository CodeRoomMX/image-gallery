var modal = document.querySelector('.modal');
var closeButton = document.querySelector('.modal .close');
var anchors = document.querySelectorAll('.strip a');
var items = document.querySelectorAll('.strip li');

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
items.forEach(a => a.addEventListener('mouseover', function(e){
  TweenMax.to(this, 0.3, {scale: 1.2});
}));
items.forEach(a => a.addEventListener('mouseleave', function(e){
  TweenMax.to(this, 0.3, {scale: 1});
}));