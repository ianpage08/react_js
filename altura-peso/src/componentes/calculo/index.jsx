import { useState } from "react"




const Calculo = () => {
        const [altura, setAltura] = useState(null)
        const [peso, setPeso] = useState(null)
        const [resultado, setResultado] = useState(null)


    const calcularIMC = () =>{
        
        const imc = peso / (altura * altura)
        // isNaN (altura) e isNan(peso) foram adicionados. Serve para verificar se a variável altura ou a variável peso são números válidos isNaN=(is Not a Number).
        if( isNaN(altura) || isNaN(peso) ||altura === 0 || peso === 0){
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
    
    
    //nos inputs foi adicionado o o (value)  garante que o input de altura sempre exiba o valor armazenado na variável de estado altura ou peso 
    return(
        <div >
            <input type="number" placeholder="Altura (Metros)" value={altura} onChange={evento => {setAltura(parseFloat(evento.target.value))}} />
            <input type="number"  placeholder="Peso (KG)" value={peso} onChange={evento => {setPeso(parseFloat(evento.target.value))}}/>
            <button type="button" onClick={calcularIMC}>Calcular</button>
            {resultado}
        </div>
        
    )
}

export default Calculo