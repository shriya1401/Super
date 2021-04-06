var canvas=new fabric.Canvas("canvas")
block_width=30;
block_height=30;
playerx=10;
playery=10;

var playerobject="";
var blockobject="";
function playerimage(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
         top:playerx,
         left:playery
 });
 canvas.add(playerobject)
    });

    
}


var blockimage="";
 function blockupdate(getimage){
     fabric.Image.fromURL(getimage,function(Img){
         blockobject=Img;
         blockobject.scaleToWidth(block_width);
         blockobject.scaleToHeight(block_height);
         blockobject.set({
             top:playerx,
             left:playery
         });
         canvas.add(blockobject)
     });
 } 


window.addEventListener("keydown",my_keydown)

function my_keydown(e){
   
    var key_number=e.keyCode;
    console.log(key_number);
    if(key_number=='38'){
        up();
        console.log("up was pressed") ;  
    }
    if(key_number=='40'){
        down();
        console.log("down was pressed");
    }
    if(key_number=='37'){
        left();
        console.log("left was pressed")
    }
    if(key_number=='39'){
        right();
        console.log("right was pressed")
    }
    if(key_number=='66'){
     blockupdate("body.png")  
     console.log("b was pressed") 
    }
    if(key_number=='70'){
        blockupdate("face.png");
        console.log("f was pressed");
    }
    if(key_number=='71'){
        blockupdate("left.png");
        console.log("g was pressed")

    }
    if(key_number=='76'){
        blockupdate("legs.png")
        console.log("l was pressed")
    }
    if(key_number=='82'){
    blockupdate("right.jpg")
    console.log("r was pressed")
}


if(key_number=='80'&&e.shiftKey==true){
    block_height=block_height+10;
    block_width=block_width+10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
    console.log("shift and t was pressed");
}
if(key_number=='77'&&e.shiftKey==true){
    block_height=block_height-10;
    block_width=block+width-10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
    console.log("m and shift was pressed");
}


}

function down(){
    if(playery<500){
        playery=playery+block_height;
        canvas.remove(playerobject);
        playerimage();

        
    }
    

}


function up(){
    if(playery>0){
        playery=playery-block_height;
        canvas.remove(playerobject);
        playerimage();

    }
}

function left(){
    if(playerx>0){
        playerx=playerx-block_width;
        canvas.remove(playerobject)
        playerimage();

    }
}

function right(){
    if(playerx<600){
        playerx=playerx-block_width;
        canvas.remove(playerobject)
        playerimage();
    }
}

