import Post from "./Post"
import { useContext } from "react"
import DataContext from "../context/DataContext";

const Home = () => {
  const {seResult, fetchError, loading} = useContext(DataContext)
  return (
    <main className="Home">
      {loading && <p className="statusMsg" style={{color:"darkorchid", fontWeight:"bold", textAlign:"center"}}>Posts are loading...</p> }
      {!loading && fetchError && <p className="statusMsg" style={{color:"red", fontWeight:"bold"}}>{fetchError}</p> }
      {!loading && !fetchError && 
        (seResult.length ? seResult.map(item => 
          ( <Post key={item.id} posts={item}/>)) : <p className="statusMsg">Sorry! There is no post</p>) }
    </main>
  )
}
export default Home