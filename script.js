feather.replace();

//VARIÁVEIS DAS CORES
let formColors = document.querySelector('.form-colors');
let svgColor = document.querySelectorAll('svg');
let color = '';
//VARIÁVEIS DOS TAMANHOS
let formSizes = document.querySelector('.form-sizes');
let labelSize = document.querySelectorAll('.size');
let size = '';
//VARIÁVEL DO CARRINHO
let cart = document.querySelector('.cart-button');
//VARIÁVEIS DO MODAL
let modalOverlay = document.querySelector('.modal-overlay');
let parag = document.querySelector('.menssage');
let closeModal = document.querySelector('a');
let modalButton = document.querySelector('.modal-button');

//ABRIR E FECHAR O MODAL
const Modal = {
    open() {
        modalOverlay.classList.add('active');
    },
    close() {
        modalOverlay.classList.remove('active');
    },
    message() {
        if(modalButton.textContent === 'OK'){
            Modal.close();
        }if(modalButton.textContent === 'Confirmar'){
            parag.innerHTML = `Compra finalizada! <br><br> Obrigada por adquirir nosso produto!! `
            modalButton.innerHTML = 'Voltar à página';
        } else {
            window.location.reload();
        }
    }
}

//EVENT LISTENER 
formColors.addEventListener("click", selectColor);
formSizes.addEventListener("click", selectSize);
cart.addEventListener("click", buyShoe);
closeModal.addEventListener("click", Modal.close);
modalButton.addEventListener("click", Modal.message);

//FUNÇÃO PARA O BOTÃO DO CARRINHO
function buyShoe() {
    //CASO A COR OU O TAMANHO NÃO ESTEJAM SELECIONADOS
    //MOSTRARÁ UMA MENSAGEM ATRAVÉS DO MODAL
    if ((color === '') || (size === '')) {
        parag.innerHTML = 'É necessário escolher a cor e o tamanho para continuar'
        modalButton.innerHTML = 'OK';
    } else {
        //MOSTRARÁ A MENSAGEM DE FINALIZAÇÃO, MOSTRANDO A COR E O TAMANHO SELECIONADO
        parag.innerHTML = `Pedido: <br><br>Tênis: Epic React
        Flyknit 2. <br> Cor: ${color} <br> Tamanho: ${size} <br><br>`;
        modalButton.innerHTML = 'Confirmar';
    }
    Modal.open();
}

//FUNÇÃO PARA A SELEÇÃO DA COR
function selectColor() {
    if (formColors[0].checked) {
        svgColor[1].classList.add('color-active');
        svgColor[2].classList.remove('color-active');
        svgColor[3].classList.remove('color-active');
        color = 'verde';
    } else if (formColors[1].checked) {
        svgColor[2].classList.add('color-active');
        svgColor[1].classList.remove('color-active');
        svgColor[3].classList.remove('color-active');
        color = 'vermelho';
    } else if (formColors[2].checked) {
        svgColor[3].classList.add('color-active');
        svgColor[1].classList.remove('color-active');
        svgColor[2].classList.remove('color-active');
        color = 'azul'
    }
    //ATUALIZA A COR DO TAMANHO SELECIONADO
    selectSize();
}

//FUNÇÃO PARA A SELEÇÃO DE TAMANHO
function selectSize() {
    //SE NÃO TIVER COR SELECIONADA, SELECIONA A COR VERDE PARA INICIAR 
    if (color === '') {
        svgColor[1].classList.add('color-active');
        color = 'verde';
    }
    for (let i = 0; i < formSizes.length; i++) {
        if (formSizes[i].checked) {
            if (color === 'verde') {
                labelSize[i].classList.toggle('sizes-green');
                labelSize[i].classList.remove('sizes-red');
                labelSize[i].classList.remove('sizes-blue');
                size = formSizes[i].id;
            } else if (color === 'vermelho') {
                labelSize[i].classList.toggle('sizes-red');
                labelSize[i].classList.remove('sizes-green');
                labelSize[i].classList.remove('sizes-blue');
                size = formSizes[i].id;
            } else if (color === 'azul') {
                labelSize[i].classList.toggle('sizes-blue');
                labelSize[i].classList.remove('sizes-green');
                labelSize[i].classList.remove('sizes-red');
                size = formSizes[i].id;
            }
        }
    }
}