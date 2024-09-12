import './generateMap.css'

function criador() {
     const direcoes = ['Norte', 'Sul', 'Oeste', 'Leste'];
     const places = ['Floresta', 'Cidade', 'Neve', 'Dungeon', 'Deserto', 'Praia'];
 
     alert('Gerando Mapa ... ');
 
     let lado = 0;
     let saidaDir = [];
     let saidaPla = [];
 
     while (lado <= 3) {
         let nomes = Math.floor(Math.random() * places.length);
         console.log(`${direcoes[lado]}  ${places[nomes]}`);
 
         saidaDir.push(direcoes[lado]);
         saidaPla.push(places[nomes]);
 
         lado++;
     }
 
     // Convertendo arrays para strings
     let exibidor = (
         <div>
             <h2>
                 {saidaDir.join(', ')} - {saidaPla.join(', ')}
             </h2>
         </div>
     );
 
     return exibidor;
 }
 
 // Chamada da função
 // criador();
 

export default criador;

