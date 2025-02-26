import styles from './Perfil.module.css'

//export default function()
//const Perfil export default Perfil

export default ({nameUsuario}) => {
    
    const usuario = {
        nome: 'ian', 
        avatar: 'https://avatars.githubusercontent.com/u/179640858?v=4&size=64'
    }
    return (
        <header className={styles.header}>
            
            <img src={`https://github.com/${nameUsuario}.png`} alt="" className={styles.avatar}/>
            <h1 className={styles.name}
            >{nameUsuario}
            </h1>
        </header>
    )
}


