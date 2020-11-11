import { useEffect, useState } from 'react'
import PostApiService from '../../services/post-api-service'
import { Redirect } from 'react-router-dom'
import PostImage from './PostImage'


export default function EditPost(props) {
    const postId = props.match.params.postId 

    const [post, setPost] = useState({
        title: '',
        desc_post: '',
        pic: '',
    })
    const [redirect, setRedirect] = useState(false)
    const [redirectTo, setRedirectTo] = useState('')
    
    useEffect(() => {
        const fetchPost = async () => {
            PostApiService.getPostById(`/posts/${postId}`)
                .then((res) => {
                    setPost(res)
                })
                .catch()
        }
        fetchPost();
    }, [postId, setPost]) 

    const { 
        id,
        title,
        desc_post,
        pic
    } = post

    // console.log('post: ', post)

    const updatePost = (e) => {
        e.preventDefault()
        const { id, value } = e.target
        return setPost({ ...post, [id]: value })
    }

    const handleUpdatePost = () => {
        const { title, desc_post, id } = post
        PostApiService.putPost(title, desc_post, id)
            .then((res) => {
                // setPost({})
                setRedirectTo(res.id)
                setRedirect(true)
            })
            .catch(err => {
                console.log({ err })
            })
    }

    const handleDeletePost = () => {
        const { id } = post
        PostApiService.deletePost(id)
            .then((res) => {
                // setPost({})
                window.location = `/feed/explore`; // temp... likely `/users/:userId`
            })
            .catch(err => {
                console.log({ err })
            })

    }

    const redirectToPost = (postId) => {
        if (redirect) {
            // return <Redirect to={`/posts/${postId}`}/>
            return <Redirect to={`/feed/explore`}/>
        }
    }

    const cancel = () => {
        return props.history.goBack()
    }


    return (
        <main>
            <div className="edit">
                {redirectToPost(redirectTo)}
                <div className='post-img'>
                    <PostImage src={pic} />
                </div>
                <div>
                    <div className="upload-inputs">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" className="post-input" 
                            value={title} 
                            onChange={(e) => updatePost(e)} required />
                    </div>
                    <div className="upload-inputs">
                        <label htmlFor="desc_post">Description:</label>
                        <input type="text" id="desc_post" className="post-input"    
                            value={desc_post}
                            onChange={(e) => updatePost(e)} required />
                    </div>

                </div>
                <div className="actions">
                    <button onClick={() => cancel()}>Cancel</button>
                    <button onClick={() => handleUpdatePost()}>Update Post</button>
                    <button onClick={() => handleDeletePost()}>Delete Post</button>
                </div>
            </div>
        </main>
    )
}