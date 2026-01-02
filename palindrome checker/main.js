
    const input = document.getElementById("input");


function reverseValue(str){

return str.split("").reverse().join("");





}


function check(){
    
let value = input.value;
    const reverse = reverseValue(value)


// alert(reverse)

    if(value==reverse){


        alert("yes")
    }else{


        alert("no")
    }
    
    input.value= ""
}
