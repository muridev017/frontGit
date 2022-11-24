import { UserInfo } from "../pages/user/User"

export function Repo({repo}: UserInfo) {
    const {name, html_url, description, language} = repo
    return(
        <div className="repo">
        <h3>
        <a href={html_url}>{name}</a>
        </h3>
        <p>{description}</p>
        {language && <small>Escrito em {language}</small>}
        </div>

    )
}