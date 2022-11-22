import axios from "axios"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

type Repositorio = {
  full_name: string
  description: string
}

export function Repos() {
  const { data, isFetching } = useQuery<Repositorio[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/muridev017/repos')

    return response.data
  }, {
    staleTime: 1000 * 60,
  })


  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map(repo => {
        return (
          <div className="container">
            <div className="searchForm">
              <h2>Busque repositórios </h2>
              <form action="">
              <input type="text" />
              <button></button>
              </form>
            </div>
          <li key={repo.full_name}>
            <Link to={`repo/${repo.full_name}`}>
              {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
          </div>
        )
      })}
    </ul>
  )
}