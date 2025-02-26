import { useState } from 'react'
import Perfil from './componets/Perfil'
import Formulario from './componets/formulario'
import ResposList from './componets/REposList' 

function App() {
  const [fomularioEstaVisivel, setFomularioestavisivel] =  useState(true) 
  

  return (
    <>
      <Perfil name ='Ian Page' img = 'https://avatars.githubusercontent.com/u/179640858?v=4&size=64'/>

      <ResposList/>
      
        {/* {fomularioEstaVisivel && (<Formulario/>)}
        <button type='button' onClick={() => setFomularioestavisivel(!fomularioEstaVisivel)}>toggle</button> */}
      
      
    </>
  )
}

export default App
