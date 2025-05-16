// ...existing code...

// ScrollReveal animations
ScrollReveal().reveal('.header-home', { 
  duration: 1000, 
  origin: 'top', 
  distance: '50px',
  reset: true 
});


 
ScrollReveal().reveal('.about', { 
  duration: 1000, 
  origin: 'left', 
  distance: '50px',
  reset: true 
});
ScrollReveal().reveal('.why_us', { 
  duration: 1000, 
  origin: 'right', 
  distance: '50px',
  reset: true 
});


// Animation personnalisée pour chaque box de why_us
ScrollReveal().reveal('.why_us .box:nth-child(1)', { 
  duration: 600,
  origin: 'right',
  distance: '100px',
  reset: true
});
ScrollReveal().reveal('.why_us .box:nth-child(2)', { 
  duration: 900,
  origin: 'left',
  distance: '100px',
  reset: true
});
ScrollReveal().reveal('.why_us .box:nth-child(3)', { 
  duration: 1200,
  origin: 'left',
  distance: '40px',
  reset: true
});
ScrollReveal().reveal('.why_us .box:nth-child(4)', { 
  duration: 1500,
  origin: 'right',
  distance: '40px',
  reset: true
});





ScrollReveal().reveal('.decoration', { 
  duration: 1000, 
  origin: 'bottom', 
  distance: '50px',
  reset: true 
});
ScrollReveal().reveal('footer', { 
  duration: 1000, 
  origin: 'bottom', 
  distance: '30px',
  reset: false 
});

// ...existing code...const btn_close_menu =document.getElementById('btn_close_menu')
const menu_open =document.getElementById('menu_open')
const slide_menu = document.querySelector('.slide-menu')

menu_open.addEventListener('click',(e)=>{
    slide_menu.style.width = "100vw"
    document.querySelector("body").style.overflow = "hidden"
})  

btn_close_menu.addEventListener('click',(e)=>{
    slide_menu.style.width = "0"
    document.querySelector("body").style.overflow = "auto"
}) 


ScrollReveal().reveal('.home .left');
ScrollReveal().reveal('.home .right', { delay: 500 });
 