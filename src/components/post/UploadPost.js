import { useState } from 'react'
import PostApiService from '../../services/post-api-service'


export default function UploadPost(props) {
    const [post, setPost] = useState({})
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

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
        return setPost({ ...post, [id]: value })
    }

    const submitPost = () => {
        const { title, description } = post
        PostApiService.postPost(title, description, image)
            .then((res) => {
                setPost({})
                setError(null)
                window.location = `/feed/explore`; // temp... likely `/feed/home`
            })
            .catch(res => {
                setError(res.error)
            })
    }

    const cancel = () => {
        return props.history.goBack()
    }


    return (
        <main>
            <div className="upload">
                <div className="box upload-box">
                    <div>
                        { loading
                            ? <p>loading...</p>
                            : <img src={image} style={{width: "100%"}} />
                        }
                    </div>
                    <div>
                        <input 
                            type="file"
                            name="file"
                            placeholder="Upload Image"
                            className="input input--file"
                            onChange={uploadImage}
                        />
                    </div>
                </div>
                <div>
                    <div className="inputgroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="input input--title" placeholder="" onChange={(e) => updatePost(e)} required />
                    </div>
                    <div className="inputgroup">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" rows="4" id="description" className="input" placeholder="" onChange={(e) => updatePost(e)} required />
                    </div>
                </div>
                {error && <p className='error'>{error}</p>}
                <div className="input__actions">
                    <div className="button" role="button" onClick={() => cancel()}>Cancel</div>
                    <div className="button" role="button" onClick={() => submitPost()}>Add Post</div>
                </div>
            </div>
        </main>

    )
}