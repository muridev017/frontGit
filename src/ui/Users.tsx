import { Link } from "react-router-dom"

export function Users({user}: any) {
    const {avatar_url, login, id} = user
    
    return(
        
                <div className="user">
                    <div className="image">
                        <img src={avatar_url} alt={login} />
                    </div>
                    <div className="userInfos">
                        <h3>{login}</h3>
                        <small>{id}</small>
                        <Link to={`/user/${login}`}>View profile</Link>
                    </div>
                </div>
    )
    
    
}