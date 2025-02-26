import { useEffect, useState } from "react"
import styles from './ReposList.module.css'




const ResposList =({nameUsuario}) =>{
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${nameUsuario}/repos`)
        .then(res => res.json())
        .then(resJson =>{
            console.log(resJson)
            setRepos(resJson)
            
        })
    }, [nameUsuario])
    return(
        <div className='container'>
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li key={repositorio.id} className={styles.listItem}> 
                    <div className={styles.itemName}>
                        <b>Nome:</b> {repositorio.name}
                    </div>
                    <div className={styles.itemLanguage}><b >Liguagem:</b> {repositorio.language}
                    </div>
                    <a target="_blank" className={styles.itemLink} href={repositorio.html_url}>Visitar site</a>
                </li>
            ))}
            
        </ul>
        </div>
    )
}

export default ResposList 