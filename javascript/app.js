// RESPOSIVE NAVBAr

function extendNav(){
    const navlist = document.querySelector('.nav-toggle');
    navlist.classList.toggle("Show"); 
}

// Nav STICKEY SCROLL

function navScroll(){
window.addEventListener('scroll', function(){

    let navbar = document.querySelector('.navbar');

    if(window.pageYOffset >= 74){
        navbar.classList.add('stickey-nav');
    }else 
        navbar.classList.remove('stickey-nav');
})
}

navScroll();


function extendList1() {
  const dropmenu1=  document.querySelector('dropmenu1');
  dropmenu1.classList.toggle('droplist1');

}