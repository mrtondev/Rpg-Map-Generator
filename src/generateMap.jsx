import './generateMap.css'

function criador(){

     const direcoes = ['Norte','Sul', 'Oeste','Leste']

     const names = ['Floresta', 'Cidade','Neve', 'Dungeon','Deserto','Praia']
    alert('chamada ok');


    
    let direcao = Math.floor(Math.random() * direcoes.length)
    let nomes = Math.floor(Math.random() * names.length)      

    console.log(`${direcoes[direcao]}  ${names[nomes]}`)
}


export default criador;

