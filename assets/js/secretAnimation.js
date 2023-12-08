(function(){
  const canvas = document.querySelector("#secretAnimation");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  ctx.fillStyle = "red";
  ctx.fillRect(canvas.width - 50,canvas.height- 50,100 , 100);
  
  var player1 = {
    x: 50,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: 'red',
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
    color: 'blue',
    speed: 5,
    isJumping: false,
    jumpHeight: 100,
    deathAnimationFrames: 0,
    currentFrame: 0,
    frames: 8,
    animation: 'walk'
  };


  function drawPlayer(player) {
    var frameWidth = spriteSheet.width / player.frames;
    ctx.drawImage(
      spriteSheet,
      frameWidth * player.currentFrame,
      0,
      frameWidth,
      spriteSheet.height,
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