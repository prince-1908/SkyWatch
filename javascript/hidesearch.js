let search = document.getElementById('search');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 20){
        search.style.opacity = 0;
        search.style.pointerEvents = 'none';
        search.style.top = '-40vh';
    }
    else{
        search.style.opacity = 1;
        search.style.pointerEvents = 'auto';
        
        if(window.matchMedia('(max-width: 1024px)').matches) {
            search.style.top = '15vh';
        }
        else{
        search.style.top = '20vh';
        }
    }
});