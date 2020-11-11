import { useEffect, useState } from 'react'
import PostApiService from '../services/post-api-service'
import Post from './post/Post'

export default function PostSolo(props) {
    const pathId = props.location.pathname // get `/posts/:postId` to make appropriate fetch GET /api/posts/:postId

    const [postal, setPostal] = useState({})
    
    useEffect(() => {
        const fetchPost = async () => {
            PostApiService.getPostById(pathId)
                .then((res) => {
                    setPostal(res)
                })
                .catch()
        }
        fetchPost();
    }, [pathId, setPostal]) 

    return (
        <main role="main">
            <div className="postcontainer">
                <Post {...postal} />
            </div>
        </main>
    )
}