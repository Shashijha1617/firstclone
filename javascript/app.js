function extendNav(){
    const navlist = document.querySelector('.nav-toggle');
    navlist.classList.toggle("Show"); 
}

window.addEventListener('scroll', function(){

    let navbar = document.querySelector('.navbar');

    if(window.pageYOffset >= 74){
        navbar.classList.add('stickey-nav');
    }else 
        navbar.classList.remove('stickey-nav');
})
