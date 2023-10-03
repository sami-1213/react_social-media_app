import React from "react"
import { Link } from "react-router-dom"

const Post = ({posts}) => {
  return (
    <article className="post">
      <Link to={`post/${posts.id}`}>
       <h3>{posts.title}</h3>
      </Link> 
       <p className="postDate">{posts.date}</p>
       <p className="postBody">{(posts.newpost).length <=25 ? posts.newpost : `${(posts.newpost).slice(0,25)}...`}</p>
    </article>
  )
}
export default Post