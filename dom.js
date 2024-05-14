document.addEventListener('scroll',()=>{
    const navigation = document.querySelector('.navigation');
    if(window.scrollY >0){
        navigation.classList.add('scrolled');
    }
    else{
        navigation.classList.remove('scrolled');
    }
})


document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('#menuArea .menuContent a');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('menuToggle').checked = false;
      });
    });
  });
  
