var row =10
var col =15


function getRandomX(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber - 1;
}

function getRandomY(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber - 1;

}

function printPattern(){
var x = 5 + getRandomX();
var y = 5 + getRandomY();
for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
        //The Four Corner with Plus Icon
        if((i==0 && j==0) || (i==0 && j==col) || (i==row && j==0) ||(i==row && j==col)){
            process.stdout.write("+");
        }
        // This thing for Upper and Bottom Boundries
         else if( (i==0 && j!=0 && j<col)  || (i==row && j!=0 && j<col) ){
            process.stdout.write('_');
        }
        //This thing for Left and Right Boundries
        else if((j==0 && i>0 && i<col) || ( j==col && i>0 && i<row)){
            process.stdout.write('|');
        } else  if(i==x && j==y){
            process.stdout.write("*");
         }   
        else{
            
             process.stdout.write(" ");
        }
    }
    console.log();
}

}


for(let temp=0;temp<5;temp++){
    printPattern();
}