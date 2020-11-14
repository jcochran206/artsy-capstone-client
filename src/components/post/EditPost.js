import { useEffect, useState } from 'react'
import PostApiService from '../../services/post-api-service'
import PostImage from './PostImage'


export default function EditPost(props) {
    const postId = props.match.params.postId 

    const [post, setPost] = useState({
        title: '',
        desc_post: '',
        pic: '',
    })
    const [error, setError] = useState(null)
    
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
                setPost({})
                setError(null)
                window.location = `/posts/${postId}`; 
                // window.location = `/feed/explore`; // temp... likely `/users/:userId`
            })
            .catch(res => {
                setError(res.error.message)
            })
    }

    const handleDeletePost = () => {
        const { id } = post
        PostApiService.deletePost(id)
            .then((res) => {
                window.location = `/feed/explore`; // temp... likely `/feed/home`
            })
            .catch(err => {
                console.log({ err })
            })

    }

    const cancel = () => {
        return props.history.goBack()
    }

    return (
        <main>
            <div className="edit">
                <div className='post__img'>
                    <PostImage src={pic} />
                </div>
                <div>
                    <div className="inputgroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="input input--title" 
                            value={title} 
                            onChange={(e) => updatePost(e)} 
                            required />
                    </div>
                    <div className="inputgroup">
                        <label htmlFor="desc_post">Description</label>
                        <textarea type="text" rows="4" id="desc_post" className="input" 
                            value={desc_post} 
                            onChange={(e) => updatePost(e)} 
                            required />
                    </div>
                </div>
                {error && <p className='error'>{error}</p>}
                <div className="input__actions">
                    <div className="button" role="button" onClick={() => cancel()}>Cancel</div>
                    <div className="button" role="button" onClick={() => handleDeletePost()}>Delete</div>
                    <div className="button" role="button" onClick={() => handleUpdatePost()}>Update</div>
                </div>
            </div>
        </main>
    )
}