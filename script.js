var nomes = [];
var nome = '';
var encontrado = false;


while(nomes.length < 5){
    nome = prompt('Digite um nome:');
    nomes.push(nome);
   
}
nome = prompt('Digite um nome novamente:');
for (let i = 0; i < nomes.length; i++) {
    const element = nomes[i];
    if(nome == element){
      encontrado = true;
    }
}
if(encontrado == true){
    console.log('Achei!');
}else{
    console.log('Não achei!');
}