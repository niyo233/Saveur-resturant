

const nav = document.getElementById('responsive-nav-menu')


document.getElementById('menu-btn').addEventListener('click',function(){
     nav.style.display = 'block'
    console.log('button clicked') 
})

document.getElementById('close-menu-btn').addEventListener('click',function(){
//    links.style.display = 'none'
    nav.style.display = 'none'
    console.log('button clicked') 
})

const links = document.querySelectorAll('#nav-links a')

    links.forEach(link => {
        link.addEventListener('click',(event) =>{
           nav.style.display = 'none'
        })
    });
   
