import { createContext, useState, useEffect } from "react";
import {format} from 'date-fns'
import api from '../api/data'
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [post, setPost] = useState([])
    const[search, setSearch] = useState('')
    const[seResult, setSeResult] = useState([])
    const [postTitle, setPostTitle] = useState('')
    const[postBody, setPostBody] = useState('')
    const [edTitle, setEdTitle] = useState('')
    const[edBody, setEdBody] = useState('')
    const navigate = useNavigate()
    const {width} = useWindowSize()
    const {data, fetchError, loading} = useAxiosFetch('http://localhost:3500/posts')

    useEffect( () => {
        setPost(data)
    }, [data])

    useEffect( () => {
        const result = post.filter(items => ((items.title).toLowerCase()).includes(search.toLowerCase()));
        setSeResult(result.reverse())
    }, [post, search])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = post.length ? post[post.length - 1].id + 1 : 1;
        const date = format(new Date(), "MMMM, dd, yyyy, pp") ;
        const newData = {id, title: postTitle, date, newpost: postBody}
        try{
        const result = await api.post('/posts', newData)
        const postList = [...post, result.data]
        setPost(postList)
        setPostBody('')
        setPostTitle('')
        navigate('/')   
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    }

    const handleEdit = async(id) => {
        const date = format(new Date(), "MMMM, dd, yyyy, pp") ;
        const editData = {id, title: edTitle, date, newpost: edBody}
        try{
        const result = await api.put(`/posts/${id}`, editData)
        setPost(post.map(items => items.id === id ? {...result.data} : items))
        setEdBody('')
        setEdTitle('')
        navigate('/') 
        }catch(err){
        console.log(`Error: ${err.message}`);
        }
    }

    const handleDelete = async (id) => {
        try{
        await api.delete(`posts/${id}`)
        const postList = post.filter(items => items.id!==id)
        setPost(postList)
        navigate('/')
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
        
    }
    return (
        <DataContext.Provider value={{
            width, search, setSearch, seResult, fetchError, loading,
            postTitle, setPostTitle, postBody, setPostBody, handleSubmit,
            post, edTitle, edBody, setEdTitle, setEdBody, handleEdit, handleDelete            
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;