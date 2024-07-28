const toogle = document.getElementById('toogle-check');
toogle.addEventListener('change',()=>{
    document.documentElement.classList.toggle('lightmode');
});