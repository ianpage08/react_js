import { useState } from 'react'
import Perfil from './componets/Perfil'
import Formulario from './componets/formulario'
import ResposList from './componets/REposList' 

function App() {
  const [fomularioEstaVisivel, setFomularioestavisivel] =  useState(true) 
  const [nameUsuario, setNome] = useState('')
  

  return (
    <><input type="text" name="" id="" placeholder='Seu Nome de usuario' onBlur={(evento) => setNome(evento.target.value)}/>
      
      {nameUsuario.length > 4 && (
        <>
        <Perfil nameUsuario={nameUsuario}/>
        <ResposList nameUsuario={nameUsuario}/>
        </>
      )}
        {/* {fomularioEstaVisivel && (<Formulario/>)}
        <button type='button' onClick={() => setFomularioestavisivel(!fomularioEstaVisivel)}>toggle</button> */}
      
      
    </>
  )
}

export default App
