import { useEffect, useState } from "react"



const ResposList =() =>{
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/ianpage08/repos')
        .then(res => res.jeson())
        .then(resJson =>{
            setRepos(resJson)
            console.log(resJson)
        })
    }, [])
    return(
        <>
        <ul>
            {repos.map(repositorio => (
                <li>
                    <b>Nome:</b> {repositorio.name}
                    <b>Liguagem:</b> {repositorio.language}
                    <a target="_blank" key={repositorio.id} href={repositorio.html_url}>Visitar site</a>
                </li>
            ))}
            <li>Repositorio</li>
        </ul>
        </>
    )
}

export default ResposList