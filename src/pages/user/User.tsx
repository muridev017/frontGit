import { useState, useEffect } from 'react'
import './User.css'
import user from '../../assets/user.png'
import location from '../../assets/location.png'
import site from '../../assets/site.png'
import github from '../../assets/github.png'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { Repo } from '../../ui/Repo'

export interface UserInfo {
    repo: any,
    id: number,
    avatar_url: string,
    name: string,
    bio: string,
    description: string,
    language: string,
    followers: number,
    following: number,
    location: string,
    blog: string,
    html_url: string
}

export function User() {
    const { login } = useParams()

    const [userInfo, setUserInfo] = useState<UserInfo>()

    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchInformation = async () => {
            try {
                const response = await Promise.all([
                    axios.get(`https://api.github.com/users/${login}`),
                    axios.get(`https://api.github.com/users/${login}/repos`),
                ])
                setUserInfo(response[0].data)
                setRepos(response[1].data)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
        fetchInformation()
    }, [])

    return (
        <>
            <div className="container">
                <Link to='/' className='back'>Voltar</Link>
                <div className="userInfo">
                    <div className="image">
                        <img src={userInfo?.avatar_url} alt="foto de perfil" />
                    </div>
                    <div className="userContent">
                        <h3>{userInfo?.name}</h3>
                        <p>{userInfo?.bio}</p>
                        <div className="moreData">
                            <p>
                                <img src={user} alt="foto de seguidor" />
                                {userInfo?.followers} Seguidores. Seguindo {userInfo?.following}
                            </p>
                            <p>
                                <img src={location} alt="localização" />
                                {userInfo?.location}
                            </p>
                            
                            <p>
                                <img src={site} alt="site" />
                                {userInfo?.blog}
                            </p>
                            <p>
                                <img src={github} alt="github" />
                                <a href={userInfo?.html_url}>Veja o perfil no github</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="userRepos">
                    {repos ? (
                        repos.map((repo) => {
                            return <Repo repo={repo} key={repo.id} id={0} avatar_url={''} name={''} bio={''} description={''} language={''} followers={0} following={0} location={''} blog={''} html_url={''} />
                        })
                    )
                     : (
                        <h2>Sem repositórios deste usuário...</h2>
                    )}
                </div>
            </div>
        </>
    )
}