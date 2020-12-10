import "./Card.css";
import React from "react";




export default (props) => {
    function inicia() {
        return {
            recebeClique() {
                
                this.iniciaContagem();
            },

            iniciaContagem() {
                
              
 
                document.addEventListener('submit', x => {
                    
               
                    
                    x.preventDefault();

                    

                    document.querySelector('.Card').innerHTML = `
                    <div class='cont'>  

                    <div class='contM'>
                    <div class='topDentro'><a href='./'>Contador</a></div> 
                    <div class='divMeio'><a class='txtD' href='./'>Faltam</a><button id='btn' class='btn'>Reiniciar</button></div>


                   
                    
                    </div>
                    <div style='display:flex; flex-direction:row' class='display'>
                    
                    <div id='day'  >
                    <span id='dia' >0</span><br/>
                    <span class='cor'>Dias</span>
                    </div>
                    <div id='hour' style='margin-left: 100px;'>
                    <span id='hora'>0</span><br>
                    <span class='cor'>Horas</span>
                    </div>
                    <div id='min' style='margin-left: 100px;'>
                    <span id='minuto'>0</span><br/>
                    <span class='cor'>Minutos</span>
                    </div>
                    <div id='sec' style='margin-left: 100px;'>
                    <span id='segundo' >0</span><br/>
                    <span class='cor'>Segundos</span>
                    </div>
                    
                    </div>
                    
                    
                    
                    </div>
                   
                    `;
                })

            }
        }
    }

    const chama = inicia();
    chama.recebeClique();

    return (





        <div className="Card">
            <a href='./' className='Card_top'><section >Contador</section></a>

            <div className="Content">
                <br />
                <span className='txt'>Informe uma data</span>

                <div>
                    <form>
                        <input type='date' className='date' id='Dat' required></input><br />

                        <button className='btn' type='submit'>Iniciar contagem</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
