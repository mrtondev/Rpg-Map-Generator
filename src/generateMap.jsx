import './generateMap.css'

function criador(){

     const direcoes = ['Norte','Sul', 'Oeste','Leste']

     const places = ['Floresta', 'Cidade','Neve', 'Dungeon','Deserto','Praia']
    alert('chamada ok');

    let direcao = Math.floor(Math.random() * direcoes.length)

     while (direcao <= 3){

          let nomes = Math.floor(Math.random() * places.length)

          console.log(`${direcoes[direcao]}  ${places[nomes]}`)   
          
          direcao++
     }
    
    

}


export default criador;

