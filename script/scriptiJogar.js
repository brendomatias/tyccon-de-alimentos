
if(localStorage.getItem('dinheiroUsuario') > 0){
  var dinheiro = Number(localStorage.getItem('dinheiroUsuario'))
}
else{
  var dinheiro = 0
}


let fundoCor = true;
let pocicao = -1;
let i = 0;
let multiplicado = 1;
let cont = [0,0,0,0,0,0,0,0,0,0,0]
let precos = [10,25,50,100,200,400,800,1600,3000,5000]
let receber = [1,3,7,15,30,60,120,250,500,1000,2000]
let quantidade = [1,1,1,1,1,1,1,1,1,1,1]
let tempo = [1000,2000,4000,6000,8000,10000,12000,15000,20000,30000,45000]
let upgradesValores = [[1,2,3,4,9],[0.1,0.2,0.3,0.4,0.5]];
let upradePreço = [
  [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]],
  [[5, 10, 15, 20, 25], [6, 12, 18, 24, 30]],
  [[10, 20, 30, 40, 50], [8, 16, 24, 32, 40]],
  [[20, 40, 60, 80, 100], [12, 24, 36, 48, 60]],
  [[50, 100, 150, 200, 250], [15, 30, 45, 60, 75]],
  [[100, 200, 300, 400, 500], [20, 40, 60, 80, 100]],
  [[200, 400, 600, 800, 1000], [25, 50, 75, 100, 125]],
  [[500, 1000, 1500, 2000, 2500], [30, 60, 90, 120, 150]],
  [[1000, 2000, 3000, 4000, 5000], [35, 70, 105, 140, 175]],
  [[2000, 4000, 6000, 8000, 10000], [40, 80, 120, 160, 200]],
  [[5000, 10000, 15000, 20000, 25000], [50, 100, 150, 200, 250]],
];

let itens = 0;
let informacoesFabricas = [
  ['batata','01,00',1,"/img/batat.png"],
  ['Maçã','03,00',1,"/img/maça.png"],
  ['Cenora','07,00',1,"/img/cenora.png"],
  ['Bife','15,00',1,"/img/bife.png"],
  ['Melancia','30,00',1,"/img/melancia.png"],
  ['Coxa de Avestruz','60,00',1,"/img/coxa de avestruz.png"],
  ['Cookie','120,00',1,"/img/cokke.png"],
  ['Sanduíche','250,00',1,"/img/sanduíche.png"],
  ['Batata Frita','500,00',1,"/img/batata frita.png"],
  ['Pizza','1.000,00',1,"/img/pizza.png"],
  ['Peru','2.000,00',1,"/img/peru.png"]
]

let lojaFabricas = [
  ['Fábrica de Maçã','10,00','Esta não é uma maçã comum, você está adquirindo uma fruta premium, colhida diretamente das melhores plantações.',"/img/maça.png"],
  ['Fábrica de Cenora','25,00','Uma cenoura premium, de cultivo orgânico, rica em sabor e nutrientes. Ideal para pratos sofisticados e saudáveis.',"/img/cenora.png"],
  ['Fábrica de Bife','50,00','Corte nobre de carne, macio e suculento, perfeito para uma experiência gastronômica única.',"/img/bife.png"],
  ['Fábrica de Melancia','100,00','Fábrica de Melancia Refrescante, suculenta e cheia de vitaminas, a escolha perfeita para se hidratar nos dias quentes!',"/img/melancia.png"],
  ['Fábrica de Coxa de Avestruz','200,00','Fábrica de Coxa de Avestruz Exótica, macia e repleta de proteínas, ideal para quem busca uma experiência única à mesa!.',"/img/coxa de avestruz.png"],
  ['Fábrica de Cookie','400,00','Fábrica de Cookie Crocante por fora, macio por dentro, com pedacinhos de chocolate que derretem na boca a cada mordida!',"/img/cokke.png"],
  ['Fábrica de Sanduíche','800,00','Fábrica de Sanduíche Recheado com ingredientes frescos e saborosos, o lanche perfeito para matar sua fome de forma prática e deliciosa',"/img/sanduíche.png"],
  ['Fábrica de Batata Frita','1.600,00','Fábrica de Batata Frita Dourada, crocante e irresistível, um clássico que combina com qualquer refeição ou momento de descontração',"/img/batata frita.png"],
  ['Fábrica de Pizza','3.000,00','Fábrica de Pizza Queijo derretido, massa perfeita e sabores incríveis, a pedida ideal para compartilhar momentos especiais',"/img/pizza.png"],
  ['Fábrica de Peru','5.000,00','Fábrica de Peru Suculento, temperado na medida certa e cheio de sabor, o prato perfeito para ocasiões que merecem celebração',"/img/peru.png"]
]



function atualziaDinheiro(){
  if(localStorage.getItem('dinheiroUsuario') != null ){
    localStorage.setItem('dinheiroUsuario',dinheiro.toString())
  }
  else{
    localStorage.setItem('dinheiroUsuario',dinheiro.toString())
  }
}


function wallpapers(){
  for(let i =1;i<=13;i++){
    div = document.createElement('div');
    div.innerHTML = `<img onclick="mudarWallpaper(${i})" class="wallpaperBanner" src="/img/wallpaper1 (${i}).jpg" alt="">`
    document.querySelector('.wallpaper2').appendChild(div);
  }
}

function aviso(){
  let divAviso = document.createElement('div');
  divAviso.innerHTML = `
  <div class="alertaItem">
    <h1>aviso</h1>
    <p>você ainda não possue dinheiro ou a fabrica para comprar esse upgrade</p>
  </div>`
  divAviso.style.display = 'block';
  document.body.appendChild(divAviso);
}

function avisosumir(){
  let alerta = document.querySelector('.alertaItem');
  alerta.remove()
}
function adicionarFabrica(numero){
  let divFabrica = document.createElement('div');
  divFabrica.innerHTML = `<div" class="">
      <div class="itensInf">
      <span class ="ocuto">${numero}</span>
        <p class="textoObjeto">Fábrica: ${informacoesFabricas[numero][0]}</p>
        <p class="textoObjeto">Preço: R$ ${informacoesFabricas[numero][1]} </p>
        <p class="textoObjeto">quantidade:<span class="quantidadeItens">${informacoesFabricas[numero][2]}</span> </p>
      </div>
      <div class="objetoVender">
        <img src="${informacoesFabricas[numero][3]}" alt="">
        <div class="objetoVenderDiv">
          <div class="objeto-porcentagem">
            <div class="barraPorcentagem"></div>
            <span class="procentagem">0/100</span>
          </div>
          <button onclick="vender(${itens})" class="butao-objeto">vender</button>
        </div>
      </div>
    </div>
    `;
  let div = document.querySelector('.FabricaItes');
  div.appendChild(divFabrica)
  itens++;
}

function adicionarLoja(){
  for(let i = 0; i<10;i++){
  let divFabrica = document.createElement('div');
  divFabrica.innerHTML =
    `<div class="objetosLoja">
        <img class="imgObjeto" src="${lojaFabricas[i][3]}" alt="">
        <div class="objetosLojaColuna">
          <h1 class="tituloObjetos">${lojaFabricas[i][0]}</h1>
          <p class="descricaoObjeto">${lojaFabricas[i][2]}</p>
          <p class="descricaoObjeto">R$ ${lojaFabricas[i][1]}</p>
          <button onclick="comprar(${i})" class="buttaoComprarObetos">comprar</button>
        </div>
  </div>`
  let div = document.querySelector('.FabricaLojas');
  div.appendChild(divFabrica);
  }
}

function upgrades() {
  let pocicaoUpgrade = 0
  for(let i = 0;i<11;i++){
    for(let j = 0;j<5;j++){
    div = document.createElement('div');
    div.innerHTML = `<div class="objetosUpgrades">
          <img class="imgObjetoUpgrade" src="${informacoesFabricas[i][3]}" alt="">
          <div class="objetosUpgradesColuna">
            <h1 class="tituloObjetosUpgrade">Upgrade ${informacoesFabricas[i][0]} Quantidade</h1>
            <p class="descricaoObjetoUpgrade">quando comprado esse upgrade, sua fábrica de ${informacoesFabricas[i][0]} irar vender mais ${upgradesValores[0][j]} batata por vez</p>
            <p class="descricaoObjetoUpgrade">R$ ${upradePreço[i][0][j]},00 </p>
            <button onclick="comprarUpgradeQuantidade(${pocicaoUpgrade},${i},${j},0)" class="buttaoComprarUpgrades">comprar</button>
          </div>
        </div>`
    pocicaoUpgrade++;
    document.querySelector('.divupgrades').appendChild(div);
    }
  }
}

function upgradesTempo() {
  let pocicaoUpgrade = 0
  for(let i = 0;i<11;i++){
    for(let j = 0;j<5;j++){
    div = document.createElement('div');
    div.innerHTML = `<div class="objetosUpgradesTemp">
          <img class="imgObjetoUpgrade" src="${informacoesFabricas[i][3]}" alt="">
          <div class="objetosUpgradesColuna">
            <h1 class="tituloObjetosUpgrade">Upgrade ${informacoesFabricas[i][0]} Quantidade</h1>
            <p class="descricaoObjetoUpgrade">quando comprado esse upgrade, sua fábrica de ${informacoesFabricas[i][0]} irar diminuir o tempo em ${upgradesValores[1][j]*100}%  por vez</p>
            <p class="descricaoObjetoUpgrade">R$ ${upradePreço[i][1][j]},00 </p>
            <button onclick="comprarUpgradeQuantidade(${pocicaoUpgrade},${i},${j},1)" class="buttaoComprarUpgrades">comprar</button>
          </div>
        </div>`
    pocicaoUpgrade++;
    document.querySelector('.divupgradesTempo').appendChild(div);
    }
  }
}


function selecionarobjeto(numero){
  let barra;
  let porcentagem;
  let quantidadeItem;
  let botaoVender;
  let barras = document.querySelectorAll('.barraPorcentagem');
  barras.forEach(element =>{
    if(numero === i){
      barra = element;
    }
    i++
  })
  i = 0;
  let porcentagens = document.querySelectorAll('.procentagem');
  porcentagens.forEach(element => {
    if(numero === i){
      porcentagem = element;
    }
    i++
  })
  i = 0;
  let quantidadeItens = document.querySelectorAll('.quantidadeItens');
  quantidadeItens.forEach(element => {
    if(numero === i){
      quantidadeItem = element;
    }
    i++
    console.log(element)
  })
  i = 0;
  let botaoVendes = document.querySelectorAll('.butao-objeto');
  botaoVendes.forEach(element => {
    if(numero === i){
      botaoVender = element;
      console.log(element)
    }
    i++
  })
  i = 0;
  let posicao = document.querySelectorAll('.ocuto');
  posicao.forEach(element => {
    if(numero === i){
      posicao = element;
      console.log(element)
    }
    i++
  })
  i = 0;
  return [barra,porcentagem,quantidadeItem,botaoVender,posicao];

}


function carregarBarra(barra,numero,procentagem,cont,botaoVender){
  if(cont >= 100){
    barra.style.backgroundColor = 'rgb(24, 255, 55)';
    botaoVender.textContent = 'receber';
    return
  }
  else{
    cont++
    barra.style.width = cont+'%';
    procentagem.textContent = cont+'/100';      
    console.log(tempo[numero])
    setTimeout(carregarBarra.bind(null,barra,numero,procentagem,cont,botaoVender),tempo[numero]/10);
  }

}


function vender(numero){
  const [barra,procentagem,quantidade,botaoVender,posicao] = selecionarobjeto(numero);
  console.log(barra);
  console.log(procentagem);
  console.log(quantidade.textContent);
  if(procentagem.textContent === '0/100'){
    carregarBarra(barra,numero,procentagem,cont[numero],botaoVender);
  }
  else if(procentagem.textContent === '100/100'){
    barra.style.backgroundColor = 'yellow';
    procentagem.textContent = '0/100';
    barra.style.width = 0+'%';
    botaoVender.textContent = 'vender';
    dinheiro += receber[posicao.textContent]*Number(quantidade.textContent);
    money()
  }
  atualziaDinheiro();

}

function money(){
  document.querySelector('#dinheiro').innerHTML = dinheiro;
  atualziaDinheiro();


}

function ligarDesliogar(){
  let botao = document.querySelector('.telaDesligar');
  botao.classList.toggle('teste');
}

function mudarCorFundo(){
  let body = document.body;
  let borda = document.querySelector('.borda');
  let texto = document.querySelectorAll('.textoMudarCor')
  let corFundoE = document.querySelectorAll('.fundoMudarCorE')
  let corFundoC = document.querySelectorAll('.fundoMudarCorC')
  
  if(fundoCor == true){
    fundoCor = false;
    borda.classList.remove('bordaEscura');
    borda.classList.add('bordaClara');
    /*mudar todos os textos para preto*/
    texto.forEach(element =>{
      element.style.color = 'white';
    });
    /*mudar todos os textos para preto*/
    corFundoE.forEach(element =>{
      element.style.backgroundColor = 'white';
    });
    corFundoC.forEach(element =>{
      element.style.backgroundColor = 'black';
    });
    
  }
  else{
    fundoCor = true;
    borda.classList.remove('bordaClara');
    borda.classList.add('bordaEscura');
    /*mudar todos os textos para branco*/
    texto.forEach(element =>{
      element.style.color = 'black';
    });
    /*mudar todos os fundos para branco*/
    corFundoE.forEach(element =>{
      element.style.backgroundColor = 'black';
    });
    corFundoC.forEach(element =>{
      element.style.backgroundColor = 'white';
    });
  }
}
function  RemoverDivs(){
  let divs = document.querySelectorAll('.telasJogos');
  divs.forEach(element => {
    element.style.display = 'none';
  });
}

function  Removerbutoes(){
  let divs = document.querySelector('.tela-opcoes');
  divs.style.display = 'none';
}

  function sairAplicativos() {
    let divs = document.querySelector('.tela-opcoes');
    divs.style.display = 'block';
    RemoverDivs()
}
  
function opcoes(numero){
  RemoverDivs();
  Removerbutoes();
  let divs = document.querySelectorAll('.telasJogos');
  let i = 0;
  divs.forEach(element => {
  if(i === numero){
    element.style.display = 'block';
  }
  i++;
});
}

function comprar(numero){
  if(dinheiro>=precos[numero]){
    dinheiro-=precos[numero]
    let conttI = 0;
    let div1 = document.querySelectorAll('.objetosLoja');
    div1.forEach(element => {
      if(numero == conttI){
        element.style.display = 'none'
      }
      conttI++
    });
  money();
  adicionarFabrica(numero+1);
  }
  else{
    aviso();
    setTimeout(avisosumir,3000);
  }
  atualziaDinheiro();
}

function comprarUpgradeQuantidade(posicao,numero1,numero2,opcao){
  let achou = false;
  let div = document.querySelectorAll('.itensInf');
  let j = 0;

 
  div.forEach(element => {
    if(j == numero1){
      achou = true;
    }
  j++;
  });
  if(dinheiro>=upradePreço[numero1][opcao][numero2] && achou == true){

    if(opcao == 0){
      dinheiro-=upradePreço[numero1][opcao][numero2]
      let conttI = 0;
      let div1 = document.querySelectorAll('.objetosUpgrades');
      div1.forEach(element => {
        if(posicao == conttI){
          element.style.display = 'none'
        }
        conttI++
      });
    money();
    let quantidadeItens = document.querySelectorAll('.quantidadeItens');
    let i = 0;
    quantidadeItens.forEach(element => {
      if(numero1 === i){
        element.textContent = upgradesValores[0][numero2] + Number(element.textContent);
      }
      i++
    })
    quantidade[numero1]++;
    }
    else{
      let conttI = 0;
      let div1 = document.querySelectorAll('.objetosUpgradesTemp');
      div1.forEach(element => {
        if(posicao == conttI){
          element.style.display = 'none'
        }
        conttI++
      })
      dinheiro-=upradePreço[numero1][opcao][numero2]
      console.log(upgradesValores[opcao][numero2])
      console.log(tempo[numero1]*(upgradesValores[opcao][numero2]))
      tempo[numero1] = tempo[numero1] - (tempo[numero1]* upgradesValores[opcao][numero2])
      console.log(tempo)
      

    }
  }
  else{
    aviso();
    setTimeout(avisosumir,3000)
  }
  atualziaDinheiro();
}


function mudarWallpaper(numero){
  celular = document.querySelector('.celular');
  let texto = "url('/img/wallpaper1\ \($(numero)\).jpg')"
  celular.style.backgroundImage = `url('/img/wallpaper1 (${numero}).jpg')`;
}


function horario(){
  let agora = new Date()
  let hora =  agora.getHours();
  let minutus =  agora.getMinutes();
  document.querySelector('#hora').innerHTML = hora+':'+minutus
}

function voltarAplicativos(){
  document.querySelector('.divupgrades').style.display = 'none';
  document.querySelector('.divupgradesTempo').style.display = 'none';
  document.querySelector('.voltarAplicativo').style.display = 'none';
  let div = document.querySelectorAll('.opcoesUpgrades')
  div.forEach(element => {
    element.style.display = 'block'
  });


}

function escolhaUpgrades(numero){
  let div = document.querySelectorAll('.opcoesUpgrades')
  div.forEach(element => {
    element.style.display = 'none'
  });
  if(numero == 0){
    document.querySelector('.divupgrades').style.display = 'block';
    document.querySelector('.voltarAplicativo').style.display = 'block';
  }
  else{
    document.querySelector('.divupgradesTempo').style.display = 'block';
    document.querySelector('.voltarAplicativo').style.display = 'block';
  }
}

setTimeout(horario,60);
adicionarFabrica(0)
adicionarLoja();
wallpapers();
upgrades();
upgradesTempo();
money();
atualziaDinheiro();