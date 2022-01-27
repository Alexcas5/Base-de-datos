var pelota;
var database;
var pelotapos;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    pelota = createSprite(250,250,10,10);
    pelota.shapeColor = "red";
     pelotapos = database.ref('Pelota/posicion');
    pelotapos.on("value",readPosition,showError);
    
}

function draw(){
    background("white");
    if(pelotapos!==undefined){
     if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
    }
   
    
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function showError(){
    console.log("error al escribir en la base de datos")
}
function readPosition(data){
    position=data.val();
    pelota.x=position.x;
    pelota.y=position.y;

}
function writePosition(x,y){
database.ref('Pelota/posicion').set({
    'x':position.x+x,
    'y':position.y+y
})
}