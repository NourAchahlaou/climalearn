(function(){
  const canvas = document.querySelector("#secretAnimation");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  ctx.fillStyle = "red";
  ctx.fillRect(canvas.width - 50,canvas.height- 50,100 , 100);
  
  function load_image(path){
    let image = new Image();
    image.src = path;

    image.onload = ()=>{
      let aspectRatio = image.width / image.height;
      let imageHeight = 48;
      let imageWidth = imageHeight * aspectRatio;
      ctx.drawImage(image, 20 , 80 , imageWidth , imageHeight);
    }
  }
  
  let frame;
  let charFrame;
  let factor=7;

   function animate(){
    ctx.clearRect(0,0,canvas.width , canvas.height);
    frame = (frame + 1)%(8*factor);
    load_image(`../animations/walkAnimation/walk${charFrame}.png`)
    requestAnimationFrame(animate);
  }
  
  animate();

  // var player1 = {
  //   x: 50,
  //   y: canvas.height / 2,
  //   width: 50,
  //   height: 50,
  //   speed: 5,
  //   currentFrame: 0,
  //   frames: 8,
  //   animation: 'walk',
  //   charFrame:0,
  // };

  // var player2 = {
  //   x: canvas.width - 100,
  //   y: canvas.height / 2,
  //   width: 50,
  //   height: 50,
  //   speed: 5,
  //   isJumping: false,
  //   jumpHeight: 100,
  //   deathAnimationFrames: 0,
  //   currentFrame: 0,
  //   frames: 8,
  //   animation: 'walk',
  //   charFrame:0,

  // };


  // function drawPlayer(player) {
  //   var player1Sprite = new Image();
  //   player1Sprite.src = player === player1 ? '../animations/walkAnimation/walk1.png' : d ;
    
  //   var player2Sprite = new Image();
  //   player2Sprite.src = '../animations/walkAnimation/walk1.png';

  //   playerSprite = player === player1 ? player1Sprite : player2Sprite;
  //   playerSprite.onLoad
  // }


  // function draw(){
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   drawPlayer(player1);
  //   drawPlayer(player2);
  // }
  
  // function update(){
  //   draw();
  // }
  
  // function animate(){

  //   update();
  //   requestAnimationFrame(animate);
  // }
  
  // animate();
})()