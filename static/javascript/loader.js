document.addEventListener('DOMContentLoaded',() => {
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', function(){
        loader.innerHTML = "Done.";

        loader.style.cssText = "transition: all 2s ease; opacity: 0; z-index: -9999";
        const galleryThirdDivs = document.getElementsByClassName('galleryThird');
        const textContainer = document.getElementById('indexPage')
        const navbar = document.getElementById('navbar')
        for( i =0; i < galleryThirdDivs.length; i++){
            element = galleryThirdDivs[i];
            element.classList.toggle('galleryLoaded');
        }
        navbar.classList.toggle('navbarLoaded');
        textContainer.classList.toggle('textLoaded');

        
    });
});
    