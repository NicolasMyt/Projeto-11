
function preload(){
  //imagens pré-carregadas
  Correndo = loadAnimation("Runner-1.png","Runner-2.png");
  Estrada = loadImage("path.png");
}

function setup(){
  createCanvas(500,500);
  //crie sprite aqui
  Fundo = createSprite(250,0,300,1007)
  Fundo.addImage("Fundo",Estrada);
  Player = createSprite(300,350,30,50);
  Player.addAnimation("JogadorCorrendo",Correndo);
  Player.scale = 0.07;

  


  
}

function draw() {
  background(0);
  drawSprites();
  Player.x = World.mouseX
  Fundo.velocityY = 5;

  if(Fundo.y >= Fundo.height/2){
    Fundo.y = 0;
  }

  if(Player.x < 160){
  Player.x = 160
  }

  if(Player.x > 360){
    Player.x = 360
  }
 console.log(Player.x)
}
