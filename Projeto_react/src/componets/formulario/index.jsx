import { useState } from "react"

const Formulario = () => {
    let [materia1,setMateria1] = useState(0)
    let [materia2,setMateria2] = useState(0)
    let [materia3,setMateria3] = useState(0)
    let [nome,setNome] = useState('')

    const nomeUser = (evento) =>{
        setNome(estadoAnterior => {
            console.log(estadoAnterior)
            return evento.target.value
        })
        


    }
    const resultado = () =>{
        const soma = materia1 + materia2 + materia3
        const media = soma / 3
        console.log(soma)
        console.log(media) //estava com problema pois estava mandadno como uma string

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