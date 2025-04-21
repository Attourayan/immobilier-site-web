const btn_close_menu =document.getElementById('btn_close_menu')
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