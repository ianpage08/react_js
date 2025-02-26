import { useState } from "react"

const Calculo = () => {
        const [altura, setAltura] = useState(0)
        const [peso, setPeso] = useState(0)
        const [resultado, setResultado] = useState(0)


    const calcularIMC = () =>{
        
        const imc = peso / (altura * altura)
        console.log(imc)
        if(altura === 0 || peso === 0){
            setResultado(
            <div>
            <p>Erro, Por favor insira novamente os dados e tente novamente</p>
            </div>
            )
            
    
        }
        else{
            setResultado(
                
                <div>
                <p>seu IMC é de {imc.toFixed(2)}</p>
                </div>
            )
        }
    }
    
    

    return(
        <div>
            <input type="number" placeholder="Altura (Metros)" onChange={evento => {setAltura(parseFloat(evento.target.value))}} />
            <input type="number" name="" id="" placeholder="Peso (KG)" onChange={evento => {setPeso(parseFloat(evento.target.value))}}/>
            <button type="button" onClick={calcularIMC}>Calcular</button>
            {resultado}
        </div>
        
    )
}

export default Calculo