import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { useFetch } from "./hooks/useFetch"

type Repositorio = {
  full_name: string
  description: string
}

function App() {
  const { data: repositorios, isFetching } = useFetch<Repositorio>('users/muridev017/repos')
  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {repositorios?.map((repo: { full_name: boolean | Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
    )
}

export default App
