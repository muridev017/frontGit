import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Users } from '../../ui/Users'

export function Home() {
    const [query, setQuery] = useState<string>('')
    const [user, setUser] = useState<[]>([])

    const [page, setPage] = useState(1)

    const [limit, setLimit] = useState(10)


    const handleQueryInput = (e: { target: { value: any } }) => {
        const value = e.target.value
        setQuery(value)
    }

    const handlePrevPage = () => {
        setPage(page => {
            if (page === 1) {
                return page
            } else {
                return page - 1
            }
        })
    }

    const handleNextPage = () => {
        setPage(page =>
            page + 1)
    }

    const handlePageLimit = (e: { target: { value: any } }) => {
        const value = e.target.value
        setLimit(parseInt(value))
    }

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('https://api.github.com/search/users?q=' + query, {
                params: {
                    page,
                    per_page: limit
                }
            })
            return data?.items
        } catch (error) {
            console.error(error)
            return null
        }
    }

    const handleSearchUser = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (query) {
            const items = await fetchUser()
            setUser(items)
        } else {
            console.log('Sua pesquisa esta vazia...')
        }
    }

    useEffect(() => {
        const displayUserOnChange = async () => {
            if (query) {
                const items = await fetchUser()
                setUser(items)
            }
        }
        displayUserOnChange()
    }, [page, limit])

    return (
        <div className="container">
            <div className="searchForm">
                <h2>Github Search User</h2>
                <form>
                    <input value={query} onChange={handleQueryInput} type='text' />
                    <button onClick={handleSearchUser}>Search</button>
                </form>
            </div>
            <div className="searchResults">
                <div className='moreOptions'>
                    <label>
                        <small>Per Page</small>
                        <select onChange={handlePageLimit}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                    <div className="pagination">
                        <button onClick={handlePrevPage}>{page}</button>
                        <button onClick={handleNextPage}>{page + 1}</button>
                    </div>

                </div>
                {user ? (user.map(user => {
                    return <Users user={user} key={user.id} />
                })
                ) : (
                    <h2> Não tem nada aqui...</h2>
                )}
            </div>
        </div>
    )
}