import './generateMap.css'

function criador(){

     const direcoes = ['Norte','Sul', 'Oeste','Leste']

     const places = ['Floresta', 'Cidade','Neve', 'Dungeon','Deserto','Praia']
    alert('chamada ok');

     

     // let direcao = Math.floor(Math.random() * direcoes.length)

     let lado = 0

     while ( lado <= 3 , direcoes[lado] && places[lado] ){
          let nomes = Math.floor(Math.random() * places.length)
          console.log(`${direcoes[lado]}  ${places[nomes]}`)   
          lado++
     }
    
    

}


export default criador;

