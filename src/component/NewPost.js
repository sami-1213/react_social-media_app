import { useContext } from "react"
import DataContext from "../context/DataContext";

const NewPost = () => {

  const {postTitle, setPostTitle, postBody, setPostBody, handleSubmit} = useContext(DataContext)

  return (
    <main className="NewPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          id="ptitle"
          type="text"
          required
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
          />
        <label htmlFor="body">Post:</label>
        <textarea  
          id="ptext" 
          required
          value={postBody}
          onChange={e => setPostBody(e.target.value)} 
        />  
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
export default NewPost