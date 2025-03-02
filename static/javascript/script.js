// 
document.addEventListener('DOMContentLoaded',() => {
    
//getting all text containers

const indexPage = document.getElementById('indexPage');
const detailsPage = document.getElementById('detailsPage');
const registerPage = document.getElementById('registerPage');
//getting all navbar items 

const aboutButton = document.getElementById('aboutNavbar');
const detailsButton = document.getElementById('detailsNavbar');
const vehicleRegisterButton = document.getElementById('vehicleRegisterNavbar');
const vendorRegisterButton = document.getElementById('vendorRegisterNavbar');
const sponsorRegisterButton = document.getElementById('sponsorRegisterNavbar');

const homeButton = document.getElementById('homeNavbar');
const mediaButton = document.getElementById('mediaNavbar');

const registerButton = document.getElementById("registerNavbar");
const registerDropdown = document.getElementById("registerDropdown");

// window.addEventListener('resize', function(){ this idea is redacted because you'd need to remove the event listeners when entering a new side of the mobile true/false if statement 

if(Number(window.outerWidth) > 699){
    isMobile = false;
}

else{
    isMobile = true;
}




    
//I'm so sorry if someone is trying to edit this in the future,
//this was my first scuffed approach that I didn't bother automating. good luck 
///- Noah Buchanan March 2024


//we have to seperate the events into mobile and compute cuz click events don't work.
//DESKTOP CLICK EVENTS

if(isMobile === false){
    vehicleRegisterButton.addEventListener('click', function(){
        let textContainer = indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .1s ease; opacity: 0"
        let newText = vehicleRegisterButton.querySelector('#vehicleRegisterPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.
        }, 250); // Adjust the timing as needed
    });
    
    vendorRegisterButton.addEventListener('click', function(){
        let textContainer =  indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .1s ease; opacity: 0"
        let newText = vendorRegisterButton.querySelector('#vendorRegisterPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.
        }, 250); // Adjust the timing as needed
    });

    sponsorRegisterButton.addEventListener('click', function(){
        let textContainer =  indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .1s ease; opacity: 0"
        let newText = sponsorRegisterButton.querySelector('#sponsorRegisterPageInformation').querySelector('.textContainer');
        console.log(newText);
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
    
    mediaButton.addEventListener('click', function(){
        let textContainer =  indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0"
        let newText = mediaButton.querySelector('#mediaPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.
    
        }, 250); // Adjust the timing as needed
    
    });   
    aboutButton.addEventListener('click', function(){
        
        let textContainer =  indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0"
        let newText = aboutButton.querySelector('#aboutPageInformation').querySelector('.textContainer');
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
}

else{
//MOBILE TOUCH EVENTS
    registerButton.addEventListener('touchend', function(){
        registerDropdown.classList.toggle("dropdownShow"); //this will show the dropdown.

    });
    vehicleRegisterButton.addEventListener('touchend', function(){
        let textContainer = indexPage.querySelector('.textContainer');
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0;";
        let newText = vehicleRegisterButton.querySelector('#vehicleRegisterPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.
        }, 250); // Adjust the timing as needed
        
    });

    vendorRegisterButton.addEventListener('touchend', function(){
        let textContainer = indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0"
        let newText = vendorRegisterButton.querySelector('#vendorRegisterPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.
        }, 250); // Adjust the timing as needed
    });
    
    sponsorRegisterButton.addEventListener('touchend', function(){
        let textContainer =  indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .1s ease; opacity: 0"
        let newText = sponsorRegisterButton.querySelector('#sponsorRegisterPageInformation').querySelector('.textContainer');
        console.log(newText);
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.
        }, 250); // Adjust the timing as needed
    });  

    detailsButton.addEventListener('touchend', function(){

        let textContainer =  indexPage.querySelector('.textContainer')
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0";
        let newText = detailsButton.querySelector('#detailsPageInformation').querySelector('.textContainer');

        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.


        }, 250); // Adjust the timing as needed



    });

    mediaButton.addEventListener('touchend', function(){
        let textContainer =  indexPage.querySelector('.textContainer');
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0;";
        let newText = mediaButton.querySelector('#mediaPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.

        }, 250); // Adjust the timing as needed

    });

    aboutButton.addEventListener('touchend', function(){
        
        let textContainer =  indexPage.querySelector('.textContainer');
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0;";
        let newText = aboutButton.querySelector('#aboutPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.

        }, 250); // Adjust the timing as needed

    });
    homeButton.addEventListener('touchend', function(){
        let textContainer =  indexPage.querySelector('.textContainer');
        textContainer.style.cssText = "transition: all .25s ease; opacity: 0"

        let newText = homeButton.querySelector('#indexPageInformation').querySelector('.textContainer');
        setTimeout(() => {
            textContainer.innerHTML = newText.innerHTML;
            textContainer.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.


        }, 250); // Adjust the timing as needed
    });

}


    history.scrollRestoration = "manual";
    window.scrollTo(0,0); //these 2 lines ensure that the document goes back to the top left of the document- I'd been having issues recently with keeping it in line.



});