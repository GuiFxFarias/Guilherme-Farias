function menuShow(){
    let menumobile = document.querySelector('.menu-mobile');
    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icon').src = 'menu_white_36dp.svg'
    }else{
        menumobile.classList.add('open')
        document.querySelector('.icon').src = 'close_white_36dp.svg'
    }
}