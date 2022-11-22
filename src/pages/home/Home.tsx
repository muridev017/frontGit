import './Home.css'
import { useQuery } from "react-query"
import { Repositorio } from '../Repos'
import axios from 'axios'

export function Home (){
    const userName = ''
    const {data, isLoading} = useQuery<Repositorio[] | undefined>('search', async () =>{
        const response = await axios.get(`https://api.github.com/users/${userName}/repos`)

        return response.data
    }, {
        staleTime: 1000 * 60
    } )



    return(
        <div className="container">
            <div className="searchForm">
                <h2>Github Search User</h2>
                <form>
                    <input id='search' type={userName} />
                    <button>Search</button>
                </form>
            </div>
            <div className="searchResults">
                <div className="user">
                    <div className="image">
                        <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" alt="" />
                    </div>
                    <div className="userInfo">
                        <h3>Name of the User</h3>
                        <small></small>
                        <a href="">View profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}