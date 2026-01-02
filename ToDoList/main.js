items =[];
input = document.getElementById("input")
list = document.getElementById("list")

const StorageKey ="items"

function ShowInput(){

    list.innerHTML=""

  for(const[idx,item] of Object.entries(items)){
        const container = document.createElement('div')
        const text=document.createElement('p')
        text.textContent = item;

        const btn = document.createElement('button')
        btn.textContent="delete"
        btn.onclick = ()=>removeItems(idx);

container.appendChild(text)
        container.appendChild(btn)
list.appendChild(container)
    }
}

function addItems(){
const value = input.value;
    if(!value){
        alert("error")
    }else{

items.push(value)
ShowInput();
input.value=""
setItems();
}
}


function removeItems(idx){

    items.splice(idx,1)

    ShowInput();
    setItems();
}

function loadItems(){
 const oldItems= localStorage.getItem(StorageKey);
 if(oldItems) {items=JSON.parse(oldItems)}
    ShowInput()


}

function setItems(){

    const stringItems = JSON.stringify(items);
    localStorage.setItem(StorageKey, stringItems)

    
}

document.addEventListener("DOMContentLoaded",loadItems)