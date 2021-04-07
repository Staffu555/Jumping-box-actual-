var canvas,s1,s2,s3,s4,edges;
var music,ball;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(815,600);

    //create 4 different surfaces
    s1 = createSprite(103,575,200,50);
    s2 = createSprite(306,575,200,50);
    s3 = createSprite(509,575,200,50);
    s4 = createSprite(712,575,200,50);
    //create box sprite and give velocity
    ball = createSprite(Math.round(random(20,750)),Math.round(random(20,500)),30,30);
    ball.velocityY = random(3,9);
    ball.velocityX = random(3,9);
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    music.loop();
    edges = createEdgeSprites();
    s1.shapeColor = ('red');
    s2.shapeColor = ('blue');
    s3.shapeColor = ('yellow');
    s4.shapeColor = ('green');
    ball.shapeColor = ('white');
    ball.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if(ball.isTouching(s1)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = ('red');
        music.stop();
    }
    if(ball.isTouching(s2)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = ('blue');
        music.stop();
    }
    if(ball.isTouching(s3)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = ('yellow');
        music.stop();

    }
    if(ball.isTouching(s4)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = ('green');
        music.stop();
    }
    drawSprites();
}
