document.addEventListener('DOMContentLoaded',() => {
    
//getting all text containers

const indexPage = document.getElementById('indexPage')
const detailsPage = document.getElementById('detailsPage')
const registerPage = document.getElementById('registerPage')
//getting all navbar items 

const aboutButton = document.getElementById('aboutNavbar')
const detailsButton = document.getElementById('detailsNavbar')
const registerButton = document.getElementById('registerNavbar')
const homeButton = document.getElementById('homeNavbar')

aboutButton.addEventListener('click', function(){
    let textContainer =  indexPage.querySelector('.textContainer')
    textContainer.style.cssText = "transition: all .25s ease; opacity: 0"
    let newText = aboutButton.querySelector('#aboutPageInformation').querySelector('.textContainer');
    setTimeout(() => {
        textContainer.innerHTML = newText.innerHTML;
        textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.

    }, 250); // Adjust the timing as needed

});


detailsButton.addEventListener('click', function(){
    let textContainer =  indexPage.querySelector('.textContainer')
    textContainer.style.cssText = "transition: all .25s ease; opacity: 0"
    let newText = detailsButton.querySelector('#detailsPageInformation').querySelector('.textContainer');

    setTimeout(() => {
        textContainer.innerHTML = newText.innerHTML;
        textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.


    }, 250); // Adjust the timing as needed



});


registerButton.addEventListener('click', function(){
    let textContainer =  indexPage.querySelector('.textContainer')
    textContainer.style.cssText = "transition: all .25s ease; opacity: 0"
    let newText = registerButton.querySelector('#registerPageInformation').querySelector('.textContainer');
    setTimeout(() => {
        textContainer.innerHTML = newText.innerHTML;
        textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.


    }, 250); // Adjust the timing as needed


});

homeButton.addEventListener('click', function(){
    let textContainer =  indexPage.querySelector('.textContainer')
    textContainer.style.cssText = "transition: all .25s ease; opacity: 0"

    let newText = homeButton.querySelector('#indexPageInformation').querySelector('.textContainer');
    setTimeout(() => {
        textContainer.innerHTML = newText.innerHTML;
        textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.


    }, 250); // Adjust the timing as needed
});


});