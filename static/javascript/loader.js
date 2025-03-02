document.addEventListener('DOMContentLoaded',() => {
    // window.scrollTo(0,0);
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', function(){
      
        loader.style.cssText = "transition: all .2s ease; opacity: 0"
        setTimeout(() => {
            loader.innerHTML = "Enjoy The Show!";
            loader.style.opacity = 1; //DO NOT use style.csstext =, it ruins the transition or something.
        }, 250); // Adjust the timing as needed
        loader.classList.add('loaderLoaded');


        // setTimeout(() => {
        //     loader.style.cssText = "transition: all 2s ease; opacity: 0; z-index: -9999";
        // }, 200); // Adjust the timing as needed


        const galleryThirdDivs = document.getElementsByClassName('galleryThird');
        const leftGallery = document.getElementById('leftGallery');
        const middleGallery = document.getElementById('middleGallery');
        const rightGallery = document.getElementById('rightGallery');

        console.log(galleryThirdDivs)
        const textContainer = document.getElementById('indexPage')
        const navbar = document.getElementById('navbar')
        leftGallery.classList.toggle('galleryLoaded');
        middleGallery.classList.toggle('galleryLoaded');
        rightGallery.classList.toggle('galleryLoaded');
        // Array.from(galleryThirdDivs).forEach(element => {
        //     element.classList.toggle('galleryLoaded');
        // });
        // for( i =0; i < galleryThirdDivs.length; i++){
        //     element = galleryThirdDivs[i];
        //     element.classList.toggle('galleryLoaded');
        // }
        navbar.classList.toggle('navbarLoaded');
        textContainer.classList.toggle('textLoaded');

        
    });
});
    