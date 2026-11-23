document.body.addEventListener("keydown", changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor == "blue"){
        document.body.style.backgroundColor = "red";
    }else{
        document.body.style.backgroundColor = "blue";
    }
}

const colors = ["red", "green", "blue"];