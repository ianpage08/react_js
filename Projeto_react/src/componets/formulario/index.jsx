import { useState, useEffect } from "react"

const Formulario = () => {
    const [materia1,setMateria1] = useState(0)
    const [materia2,setMateria2] = useState(0)
    const [materia3,setMateria3] = useState(0)
    const [nome,setNome] = useState('')

    //maunt (quando é montado)
    // updater (quando é atualizado)
    //unmaunt (quando é desmontado)

    useEffect(() => {
        console.log('o estado iniciou')

        return () => {
            console.log('o estado foi destruido')
        }
    }, [])
    
    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome])

    const nomeUser = (evento) =>{
        setNome(estadoAnterior => {
            
            return evento.target.value
        })
        


    }
    const resultado = () =>{
        const soma = materia1 + materia2 + materia3
        const media = soma / 3
         //estava com problema pois estava mandadno como uma string

        if (media >= 8){
            return (
                <p>Aluno {nome} foi  Aprovado</p>
            )
        } else{
            return (
                <p>Aluno {nome} foi Reprovado</p>
            )
        }
    }

    return(
        <>
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item => ( <li key={item}> {item}</li>) )}
            </ul>
            <input type="text" name="" placeholder="Coloque Seu Nome" id=""  onChange={nomeUser}/>
            <input type="number" name="" id="" placeholder="Nota Materia" onChange={({target}) => setMateria1(parseInt(target.value)) } /> 
            <input type="number" name="" id="" placeholder="Nota Materia2" onChange={evento => setMateria2(parseInt(evento.target.value))} />
            <input type="number" name="" id="" placeholder="Nota Materia 3" onChange={evento => setMateria3(parseInt(evento.target.value))}/>
            {resultado()}
        </form>
        </>
    )
}

export default Formulario