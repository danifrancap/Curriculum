function getRadio(){
    let elemento = document.getElementsByName("gender");
    for(let i=0; elemento.length; i ++){
        if(elemento[i].checked){
            document.getElementById("radioResult").innerHTML = `O genero selecionado é  ${elemento[i].value}`;
        }
    }
}
function getOption(){
    let selectElement = document.querySelector("#select1");
    let text = selectElement.value;
    document.querySelector(".output").textContent = text;
}


function getCheckBox(){
    let checkboxes = document.querySelectorAll('input[type = checkbox]:checked');
    let text = "";
    for(let i =0; i< checkboxes.length; i++){
        text = text +","+ checkboxes[i].value;
    }
    document.getElementById("pri").innerHTML = text;
}