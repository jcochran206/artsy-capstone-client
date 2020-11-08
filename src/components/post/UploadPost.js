import { useState } from 'react'
import { Redirect } from 'react-router-dom'
// import PostApiService from '../services/post-api-service'
import PostApiService from '../../services/post-api-service'


export default function Post(props) {
    const [post, set] = useState({})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [redirectTo, setRedirectTo] = useState('')

    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'imagepool')
        setLoading(true)

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/thinkful/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url) 
        setLoading(false)

    }

    const updatePost = (e) => {
        e.preventDefault()
        const { id, value } = e.target
        return set({ ...post, [id]: value })
    }

    const submitPost = () => {
        const { title, description } = post

        PostApiService.postPost(title, description, image)
            .then((res) => {
                set({})
                setRedirectTo(res.id)
                setRedirect(true)
            })
            .catch()
    }

    const redirectToPost = (postId) => {
        if (redirect) {
            return <Redirect to={`/posts/${postId}`}/>
        }
    }

    const cancel = () => {
        return props.history.goBack()
    }


    return (
        <div className="upload">
            {redirectToPost(redirectTo)}
            <div className="box upload-box">
                <div>
                    { loading
                        ? <p>loading...</p>
                        : <img src={image} style={{width: "300px"}} alt="foo"/>
                    }
                </div>
                    
                <div>
                    <input 
                        type="file"
                        name="file"
                        placeholder="Upload Image"
                        onChange={uploadImage}
                    />
                </div>
            </div>
            <div>
                <div className="upload-inputs">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" className="post-input" placeholder="" onChange={(e) => updatePost(e)} required />
                </div>
                <div className="upload-inputs">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" className="post-input" placeholder="" onChange={(e) => updatePost(e)} required />
                </div>

            </div>
            <div className="actions">
                <button onClick={() => cancel()}>Cancel</button>
                <button onClick={() => submitPost()}>Add Post</button>
            </div>
        </div>
    )
}