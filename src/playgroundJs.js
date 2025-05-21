

let name = prompt("Qual é o seu nome?", "");

function PressBtn(){
    let age = prompt("Qual é a sua idade?", 0);
    let alergico = confirm("É alérgico a algo?");
    let alergia ="";
    
    alert(`Bem vindo ${name}`);
    alert( ' ' == false );
    if (!alergico && age >=18) {
        alergia = prompt("Alérgico ao que?", "");
    }else{
        alert("É necessário ter a idade mínimo 18, para poder se alistar");
    }

}


function PressBtn2(){
    let name = prompt("Sobrenome?", "");
}