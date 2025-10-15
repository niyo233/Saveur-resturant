// const menuBtn = document.querySelector('.menu-bers')
// const navMenu = document.querySelector('.close')


// const toggleMenu = () => {
//     menuBtn.classList.toggle('display')
// }



const nav = document.getElementById('responsive-nav-menu')
const links = document.getElementById('nav-links')

document.getElementById('menu-btn').addEventListener('click',function(){
     nav.style.display = 'block'
    console.log('button clicked') 
})

document.getElementById('close-menu-btn').addEventListener('click',function(){
//    links.style.display = 'none'
    nav.style.display = 'none'
    console.log('button clicked') 
})
document.getElementById('nav-links').addEventListener('click',function(){
    links.forEach(link => {
        link.addEventListener('click', () =>{
            
        })
    });
    console.log('button clicked') 
})