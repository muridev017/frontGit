import './Home.css'

export function Home (){
    return(
        <div className="container">
            <div className="searchForm">
                <h2>Github Search User</h2>
                <form>
                    <input type="text" />
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