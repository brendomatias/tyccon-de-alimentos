var telas = document.querySelectorAll('.opcoes');
var claro = true;
function voltar(){
telas.forEach(element => {
  element.style.display ='none';
});
}

function selecionar(posicao){
  voltar();
  let i = 0;
  telas.forEach(element => {
    if(i === posicao){
      element.style.display ='grid';
    }
    i++;
  });
}
function novojogo(posicao){
  input = document.createElement('input');
  input.type = 'text'
  input.placeholder = 'nome do slot'
  input.classList.add('input')
  if(posicao === 1){
    let slot = document.querySelector('#slot1');
    slot.replaceWith(input);
  }
  else if(posicao === 2 ){
    let slot = document.querySelector('#slot2');
    slot.replaceWith(input)

  }
  else{
    let slot = document.querySelector('#slot3');
    slot.replaceWith(input)

  }
}



function modonoturno(){
  let divFundo = document.body;
  divFundo.classList.toggle('darkFundo');
  if(claro){
    claro = false;
    document.querySelector('#textoModoEscuro').innerHTML = 'modo claro'
    localStorage.setItem('luzFundo','claro');}
  else{
    document.querySelector('#textoModoEscuro').innerHTML = 'modo escuro';
    localStorage.setItem('luzFundo','escuro');}
  }

window.onload = function(){
  let body = document.body;
  let cor = localStorage.getItem('luzFundo')
  let salves = localStorage.getItem('luzFundo')
  if(cor === 'claro'){
    body.classList.add('darkFundo');
    document.querySelector('#textoModoEscuro').innerHTML = 'modo claro'}
  else{
    body.classList.remove('darkFundo');
    document.querySelector('#textoModoEscuro').innerHTML = 'modo escuro'}}
selecionar(0);
