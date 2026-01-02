

function removeColor(){


        document.body.classList.remove("bg-green-500","bg-red-500","bg-blue-500")


    

}


function changeColor(color){
    removeColor();
    if(color==="green"){
        document.body.classList.add("bg-green-500");
    }else if(color==="red"){
        document.body.classList.add("bg-red-500");
    }else{
    
        document.body.classList.add("bg-blue-500");
    }
    
}


function changeColorRandomly(){
    removeColor();
// const color = ['green','blue','red','gray','violet','pink'];
// let chosen =Math.floor(Math.random()*color.length);
// console.log(chosen)
// let selected=color[chosen];
// document.body.classList.add(`bg-${selected}-500`)

const red= Math.round(Math.random()*255);
const green= Math.round(Math.random()*255);
const blue= Math.round(Math.random()*255);

const colors= `rgb(${red},${green},${blue})`;
document.body.style.backgroundColor = colors;
}

  