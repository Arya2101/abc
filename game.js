class game {
    constructor(){}
  
    getState(){
      var gameStateRef  = db.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      db.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        p = new player();
        var playerCountRef = await db.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          p.getCount();
        }
        f = new form()
        f.display();
      }
    }
  
    play(){
      f.hide();
      textSize(30);
      text("Game Start", 120, 100)
      player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var display_position = 130;
        for(var plr in allPlayers){
          if (plr === "player" + p.index)
            fill("red")
          else
            fill("black");
  
          display_position+=20;
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && p.index !== null){
        p.distance +=50
        p.update();
      }
    }
  }