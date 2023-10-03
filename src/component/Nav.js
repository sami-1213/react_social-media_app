import { Link } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext";

const Nav = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <nav className="navbar">
    
      <form className='searchForm' onSubmit={ e => e.preventDefault()}>
        <label htmlFor="searchForm">Search</label>
        <input
            id='search' 
            type="text"
            // eslint-disable-next-line
            role="searchbar"
            placeholder='Search'           
            value={search}
            onChange={ e => setSearch(e.target.value)}
        />
      </form>

      <ul>
        <li><Link to="/" >Home</Link> <br /></li>
        <li><Link to="/post" >Post</Link><br /></li>
        <li><Link to="/about" >About</Link></li>
      </ul>
    
    </nav>
  )
}
export default Nav