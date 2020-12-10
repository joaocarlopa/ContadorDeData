import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'

ReactDOM.render(
    <App></App>, document.getElementById('root')
)

const valor = document.getElementById('Dat');

let dados = 0;





const dataAtual = new Date();

const retorna = retornaHora();

retorna.recebeClick();


function retornaHora() {
    
    return {
        recebeClick() {
            this.inicia();
        },

        inicia() {
            document.addEventListener('submit', y => {
                document.getElementById('btn').onclick = function() {
                        window.location.reload(false);
                    }
                
                y.preventDefault();
                dados = valor.value;
                dados = dados.replace(/[-]+/g, '');
                let anoEscolhido = dados.slice(0, 4);
                let mesEscolhido = dados.slice(4, 6);
                let diaEscolhido = dados.slice(6, 8);
                let anoAtual = dataAtual.getFullYear();
                
                let diaAtual = dataAtual.getDate();
                let converteAno = Number(anoEscolhido) - Number(anoAtual);
                let totalAnos_Meses = (Number(mesEscolhido) * 30.4375) * converteAno;
                let totalDias = Number(mesEscolhido) > Number(this.mes()) ? totalAnos_Meses + (Number(diaAtual) - Number(diaEscolhido)) :  totalAnos_Meses + (Number(diaEscolhido) - Number(diaAtual));
               
                
                if (Number(anoEscolhido) <= Number(anoAtual)) {
                    alert('Insira uma data válida!');
                    window.location.reload(false);

                }
                

                

                this.resolve(totalDias)
            })


        },

        resolve(dia) {

            
            document.getElementById('dia').innerHTML = dia.toFixed(0).replace('-', '');
            
            
           
            
         

            setInterval(function() {
                document.getElementById('hora').innerHTML = 24 - new Date().getHours();
                document.getElementById('minuto').innerHTML = 60 - new Date().getMinutes();
                document.getElementById('segundo').innerHTML = 60 - new Date().getSeconds();
                
            }, 1000)
            
        },



        mes() {

            const mes = dataAtual.getMonth();
            let month = 0;
            switch (mes) {
                case 0: month = 1;
                    break;
                case 1: month = 2;
                    break;
                case 2: month = 3;
                    break;
                case 3: month = 4;
                    break;
                case 4: month = 5;
                    break;
                case 5: month = 6;
                    break;
                case 6: month = 7;
                    break;
                case 7: month = 8;
                    break;
                case 8: month = 9;
                    break;
                case 9: month = 10;
                    break;
                case 10: month = 11;
                    break;
                case 11: month = 12;
                    break;
                default: break;



            }
            return Number(month);
        },




    }
}


