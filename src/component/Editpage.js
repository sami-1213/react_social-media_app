import { useEffect } from "react"
import { useContext } from "react"
import DataContext from "../context/DataContext";
import { Link, useParams } from "react-router-dom"

const Editpage = () => {

  const {post, edTitle, edBody, setEdTitle, setEdBody, handleEdit} = useContext(DataContext)

    const { id } = useParams()
    const items = post.find(post => (post.id).toString() === id)

    useEffect(() => {
      if(items) {
        setEdTitle(items.title)
        setEdBody(items.newpost)
      }
    }, [items, setEdTitle, setEdBody])

  return (
    <main className="NewPost">
      {edTitle &&
       <> 
        <h2>Edit Post</h2>
        <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="title">Title:</label>
          <input 
            id="ptitle"
            type="text"
            required
            value={edTitle}
            onChange={e => setEdTitle(e.target.value)}
            />
          <label htmlFor="body">Post:</label>
          <textarea  
            id="ptext" 
            required
            value={edBody}
            onChange={(e) => setEdBody(e.target.value)} 
          />  
          <button type="submit" onClick={() => handleEdit(items.id)}>Submit</button>
        </form>
       </> 
      }
      {!edTitle &&
        <main className="Missing">
            <h1>404 Page not found!</h1>
            <p>Well that's dissapointing 😞</p>
            <p>Visit our <span><Link to="/">Homepage</Link></span></p>
        </main>
      }
    </main>
  )
}
export default Editpage