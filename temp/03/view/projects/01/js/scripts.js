var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit-btn");

menu.addEventListener('click', function(e){
    console.log("clicked");
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});
exit.addEventListener('click', function(e){
    console.log("clicked");
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});