import './Perfil.css'

//export default function()
//const Perfil export default Perfil

export default ({name, img}) => {
    
    const usuario = {
        nome: 'ian', 
        avatar: 'https://avatars.githubusercontent.com/u/179640858?v=4&size=64'
    }
    return (
        <div>
            
            <img src={img} alt="" className='avatar_avatar'/>
            <h3>{name}</h3>
        </div>
    )
}


