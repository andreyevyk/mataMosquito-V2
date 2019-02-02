

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 1;
var pontuacao = 0;

var MoscaTempo = 2000; 

function criarMoscaTempo(){
   if(pontuacao>=50 && pontuacao<100){
      MoscaTempo = 1800;
   }
   else if(pontuacao>=100 && pontuacao<150){
      MoscaTempo = 1500;
   }
   else if(pontuacao>=150 && pontuacao<200){
      MoscaTempo = 1000;
   }
   else if(pontuacao>=200 && pontuacao<250){
      MoscaTempo = 750;
   }
   else if(pontuacao>=250){
      MoscaTempo = 500;
   }
   return MoscaTempo;
}


function ajustaTamanhoPalcoJogo(){
   altura = window.innerHeight;
   largura = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){

   tempo +=1;

   document.getElementById('cronometro').innerHTML = tempo;
},1000)

function posicaoRandomica(){

   if(document.getElementById('mosquito')){
      document.getElementById('mosquito').remove();

      if(vidas>3){
         window.location.href = 'fimDeJogo.html?'+pontuacao;
      }else{
         document.getElementById('v'+vidas).src = "img/coracao_vazio.png"
         vidas++;
      }
      
   }

   var posicaoX = Math.random()*largura;
   posicaoX = Math.floor(posicaoX) - 90;
   var posicaoY = Math.random()*altura;
   posicaoY = (Math.floor(posicaoY) - 90)-document.getElementById('painel').clientHeight;

   if(posicaoX<0){
      posicaoX = 0;
   }
   else if(posicaoY<0){
      posicaoY = 0;
   }

   var mosquito  = document.createElement('img');
   mosquito.src = 'img/mosca.png';

   mosquito.id = 'mosquito';
   mosquito.className = tamanhoAleatorio();
   mosquito.className += ' ' + ladoAleatoria();
   mosquito.style.left = posicaoX + 'px';
   mosquito.style.top = posicaoY + 'px';
   mosquito.style.position = 'absolute';
   mosquito.id = 'mosquito'
   mosquito.onclick = function(){
      this.remove();
      if(mosquito.className.lastIndexOf('mosquito1') !=-1 ){
         pontuacao+=5;
      }else if(mosquito.className.lastIndexOf('mosquito2') !=-1 ){
         pontuacao+=3;
      }else if(mosquito.className.lastIndexOf('mosquito3') !=-1 ){
         pontuacao+=1;
      }
      document.getElementById('pont').innerHTML = pontuacao;
      
   }
   document.body.appendChild(mosquito);
   
   console.log(ladoAleatoria());
}


function tamanhoAleatorio(){
   var classe = Math.floor((Math.random() *3)+1);
   return 'mosquito'+classe;
}

function ladoAleatoria(){
   var classe = Math.floor( Math.random() * 2 );
   
   switch(classe){
      case 0: 
         return 'ladoA';
      case 1: 
         return 'ladoB';
   }
   
}