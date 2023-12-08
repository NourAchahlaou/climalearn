(function(){
  const canvas = document.querySelector("#secretAnimation");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  ctx.fillStyle = "red";
  ctx.fillRect(canvas.width - 50,canvas.height- 50,100 , 100);
  
  var player1Sprite = new Image();
  player1Sprite.src = '../animations/walkAnimation/walk1.png';

  var player2Sprite = new Image();
  player2Sprite.src = '../animations/walkAnimation/walk1.png';

  var player1 = {
    x: 50,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    speed: 5,
    currentFrame: 0,
    frames: 8,
    animation: 'walk'
  };

  var player2 = {
    x: canvas.width - 100,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    speed: 5,
    isJumping: false,
    jumpHeight: 100,
    deathAnimationFrames: 0,
    currentFrame: 0,
    frames: 8,
    animation: 'walk'
  };


  function drawPlayer(player) {
    playerSprite = player === player1 ? player1Sprite : player2Sprite;
    var frameWidth = playerSprite.width / player.frames;
    
    console.log(playerSprite);
    ctx.drawImage(
      playerSprite,
      frameWidth * player.currentFrame,
      0,
      frameWidth,
      playerSprite.height,
      player.x,
      player.y,
      player.width,
      player.height
    );
  }


  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer(player1);
    drawPlayer(player2);
  }
  
  function update(){
    draw();
  }
  
  function animate(){

    update();
    requestAnimationFrame(animate);
  }
  
  animate();
})()