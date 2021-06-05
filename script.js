let formColors = document.querySelector('.form-colors');
let svgColor = document.querySelectorAll('svg');
let formSizes = document.querySelector('.form-sizes');
let labelSize = document.querySelectorAll('.size');
let selectCor;

formColors.addEventListener("click", selectColor);
formSizes.addEventListener("click", selectSize);

function selectColor(){
    if(formColors[0].checked){
        svgColor[0].classList.add('active');
        svgColor[1].classList.remove('active');
        svgColor[2].classList.remove('active');
        selectCor = 'green';
        selectSize();
    }else if(formColors[1].checked){
        svgColor[1].classList.add('active');
        svgColor[0].classList.remove('active');
        svgColor[2].classList.remove('active');
        selectCor = 'red';
        selectSize();
    }else if(formColors[2].checked){
        svgColor[2].classList.add('active');
        svgColor[0].classList.remove('active');
        svgColor[1].classList.remove('active');
        selectCor = 'blue';
        selectSize();
    }
}

function selectSize(){
    for(let i=0; i < formSizes.length; i++){
        if(formSizes[i].checked){
            if(selectCor === 'green'){
                labelSize[i].classList.toggle('sizes-green');
                labelSize[i].classList.remove('sizes-red');
                labelSize[i].classList.remove('sizes-blue');
            }else if(selectCor === 'red'){
                labelSize[i].classList.toggle('sizes-red');
                labelSize[i].classList.remove('sizes-green');
                labelSize[i].classList.remove('sizes-blue');
            }else if(selectCor === 'blue'){
                labelSize[i].classList.toggle('sizes-blue');
                labelSize[i].classList.remove('sizes-green');
                labelSize[i].classList.remove('sizes-red');
            }
        }
    }    
}