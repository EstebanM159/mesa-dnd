var falric = document.getElementById('falric');
let click = 0;

falric.addEventListener('click', function(){
    click += 1;
    console.log(click + ' QUE HACES VIENDO ESTO??');
    if(click == 69){
        document.getElementById('falricscream').play();
        falric.src='./images/char/falricEndemoniado.png';
        falric.style.filter = "sepia(0%)";
    }
});