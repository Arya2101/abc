class form{
    constructor(){

    }
    display(){
        var title = createElement('h1');
        title.html("Multi Player Car Racing");
        title.position(400,200);
        var input = createInput("Enter your Name");
        input.position(400,280);
        var button = createButton('Submit');
        button.position(600,280);
        var greeting = createElement('h4');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            playerCount = playerCount+1;
            var name = input.value();
            p.update(name);
            greeting.html("WELCOME TO THE GAME"+name);
            p.updateCount(playerCount);
            greeting.position(600,250);
        });

    }
}