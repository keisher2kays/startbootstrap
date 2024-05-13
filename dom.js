document.addEventListener('scroll',()=>{
    const navigation = document.querySelector('.navigation');
    if(window.scrollY >0){
        navigation.classList.add('scrolled');
    }
    else{
        navigation.classList.remove('scrolled');
    }
})


$('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
  });
