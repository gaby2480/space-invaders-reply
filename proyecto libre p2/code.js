var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d455b93d-62b5-48d4-8965-4f362024e53c","23da19ff-6d83-484b-9bfe-06f5b32308bd","fbe90f92-ab14-462b-bac3-e3168d80222f","70fbdb06-1a8a-4c16-a060-9ba2cb2fe3e6","00b93b87-4b89-4055-b87f-9f3071b38f7c","9dc7b292-4dee-446f-80dd-e0b27a7fc5fd","a46acb2a-50fb-4333-b8aa-95f4c96d59c4","396d01e5-4746-4491-9341-f0fe0a240dfe","3293e051-f8c5-4f1f-ab8d-bd2ee5ae5ecc","8a268b2f-478a-42c6-9d98-253b806c610c"],"propsByKey":{"d455b93d-62b5-48d4-8965-4f362024e53c":{"name":"nave1","sourceUrl":"assets/api/v1/animation-library/gamelab/EFY9oqBBpFM5UwPvGD7JcFtTTIiVjD1./category_vehicles/playerShip1_blue.png","frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"EFY9oqBBpFM5UwPvGD7JcFtTTIiVjD1.","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EFY9oqBBpFM5UwPvGD7JcFtTTIiVjD1./category_vehicles/playerShip1_blue.png"},"23da19ff-6d83-484b-9bfe-06f5b32308bd":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"fbe90f92-ab14-462b-bac3-e3168d80222f":{"name":"bomba","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","frameSize":{"x":360,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"},"70fbdb06-1a8a-4c16-a060-9ba2cb2fe3e6":{"name":"jefe","sourceUrl":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png","frameSize":{"x":399,"y":378},"frameCount":1,"looping":true,"frameDelay":2,"version":"CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":378},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png"},"00b93b87-4b89-4055-b87f-9f3071b38f7c":{"name":"enemigo2","sourceUrl":"assets/api/v1/animation-library/gamelab/lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk/category_vehicles/enemyBlue2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk/category_vehicles/enemyBlue2.png"},"9dc7b292-4dee-446f-80dd-e0b27a7fc5fd":{"name":"enemigo1","sourceUrl":"assets/api/v1/animation-library/gamelab/.rrECMS6iQuke9S8OuIz37iCas_tJN0j/category_vehicles/enemyGreen3.png","frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":".rrECMS6iQuke9S8OuIz37iCas_tJN0j","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.rrECMS6iQuke9S8OuIz37iCas_tJN0j/category_vehicles/enemyGreen3.png"},"a46acb2a-50fb-4333-b8aa-95f4c96d59c4":{"name":"enemigo3","sourceUrl":"assets/api/v1/animation-library/gamelab/8xeR9hy.4OWNFlEjxb41UswP00DCJph5/category_vehicles/enemyRed2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"8xeR9hy.4OWNFlEjxb41UswP00DCJph5","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8xeR9hy.4OWNFlEjxb41UswP00DCJph5/category_vehicles/enemyRed2.png"},"396d01e5-4746-4491-9341-f0fe0a240dfe":{"name":"bala","sourceUrl":null,"frameSize":{"x":10,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"In849ANtKDh7NkE2T0fCiqDO3iJBmxye","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":16},"rootRelativePath":"assets/396d01e5-4746-4491-9341-f0fe0a240dfe.png"},"3293e051-f8c5-4f1f-ab8d-bd2ee5ae5ecc":{"name":"playerShip2_orange_1","sourceUrl":"assets/api/v1/animation-library/gamelab/WzsH.NjSHoP8QSpvomixRgep0O7wK.SY/category_vehicles/playerShip2_orange.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"WzsH.NjSHoP8QSpvomixRgep0O7wK.SY","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WzsH.NjSHoP8QSpvomixRgep0O7wK.SY/category_vehicles/playerShip2_orange.png"},"8a268b2f-478a-42c6-9d98-253b806c610c":{"name":"playerShip3_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//MI PROPIO JUEGO "SPACE INVADER (RÉPLICA)"
//nave dispara
//selecccionar jugador
//bombas que explotan
//tres vidas
//puntos(opcional)
//objeto potenciador 
//disparar rapido pero no tanto
//VARIABLES GLOBALES
var nave;
var fondo = createSprite(200, 200);
nave = createSprite(200, 300, 10, 10);
var nave1 = createSprite(70, 200);
var nave2 = createSprite(200, 200);
var nave3 = createSprite(330, 200);
//ANIMACIONES
fondo.setAnimation("space_1");
nave.setAnimation("nave1");
nave1.setAnimation("nave1");
nave2.setAnimation("playerShip2_orange_1");
nave3.setAnimation("playerShip3_green_1");
//ESCALAS
nave.scale = 0.7;
//VARIABLES PARA ESTADOS DEL JUEGO/VIDAS
var game_state = "inicio";
var vidas = 3;
//OCULTAR SPRITES
nave.visible = 0;

function draw() {
  //SELECCIÓN DE JUGADOR
  if (mousePressedOver(nave1)) {
    nave1.destroy();
    nave2.destroy();
    nave3.destroy();
    nave.visible = 1;
    nave.setAnimation("nave1");
  }
  if (mousePressedOver(nave2)) {
    nave1.destroy();
    nave2.destroy();
    nave3.destroy();
    nave.visible = 1;
    nave.setAnimation("playerShip2_orange_1");
  }
  if (mousePressedOver(nave3)) {
    nave1.destroy();
    nave2.destroy();
    nave3.destroy();
    nave.visible = 1;
    nave.setAnimation("playerShip3_green_1");
  }
  // nave que se mueve
  nave.x = World.mouseX;
  //BUCLE PARA GENERAR ENEMIGOS "PRIMERA LINEA"
  for (var i = 70; i < 350; i = i + 60) {
    var enem1 = createSprite(i, 45);
    enem1.setAnimation("enemigo1");
    enem1.scale = 0.5;
  }
  //BUCLE PARA GENERAR ENEMIGOS "SEGUNDA LINEA"
  //LLAMANDO AL MÉTODO PLAY
  play();
  drawSprites();
  /*
  stroke("yellow");
  fill("yellow");
  textSize(25);
  text("SELECCIONA TU JUGADOR", 33, 50);
  */
}
function play() {
  //ESTADO DEL JUEGO "INICIO"
  if (game_state == "inicio") {
    game_state = "juego";
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
