let form = document.querySelector('form');
let cor = document.querySelectorAll('svg');

form.addEventListener("click", selectColor);

function selectColor(){
    if(form[0].checked){
        cor[0].classList.add('active');
        cor[1].classList.remove('active');
        cor[2].classList.remove('active');
    }else if(form[1].checked){
        cor[1].classList.add('active');
        cor[0].classList.remove('active');
        cor[2].classList.remove('active');
    }else if(form[2].checked){
        cor[2].classList.add('active');
        cor[0].classList.remove('active');
        cor[1].classList.remove('active');
    }
}
