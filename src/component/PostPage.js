import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import DataContext from "../context/DataContext";

const PostPage = () => {
  const {post, handleDelete} = useContext(DataContext)
  const { id } = useParams()
  const items = post.find(posts => (posts.id).toString() === id)
  return (
    <main className="PostPage">
      <div className="post">
        {items &&
          <div>
            <h3>{items.title}</h3>          
            <p className="postDate">{items.date}</p>
            <p className="postBody">{items.newpost}</p>
            <MdDelete 
              className="btn"
              role="button"
              onClick={() => handleDelete(items.id)}
              tabIndex="0"
            /> 
            <Link to={`/edit/${items.id}`}>
              <TbEdit 
                className="btn2"
                role="button"
                tabIndex="0" />
            </Link>
          </div>
        } 
        {!items &&
          <main className="Missing">
            <h1>404 Page not found!</h1>
            <p>Well that's dissapointing 😞</p>
            <p>Visit our <span><Link to="/">Homepage</Link></span></p>
          </main>
        }
      </div>
    </main>
  )
}
export default PostPage