
let selectEstados = document.querySelector("#estados")

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(data=>{
    if(data){
        return data.json();
    }else{
        console.log("erro")
    }
}).then(update=>{
    update.forEach(value => {
        selectEstados.options[selectEstados.options.length] = new Option(value.nome, value.sigla);
    });
})