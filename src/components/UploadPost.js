import { useState } from "react"
import Nav from './Nav'

export default function Post(){
    const [post, set] = useState({})
    const uploadImage = () => {
        console.log('upload img')
    }
    const updatePost = (e) => {
        e.preventDefault()
        const {id, value} = e.target
        return set({...post, [id]:value})
    }
    const submitPost = () => {
        console.log(post)
        set({})
    }
    const cancel = () => {
        console.log('cancel')
    }
    return(
        <>
            <Nav />
            <main role="main">
                    <div class="post">
                        <div class="box box-upload">
                            <button onClick={() => uploadImage()}>Upload Image</button>
                        </div>
                        <div class="info">
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" className="post-input" placeholder="" onChange={(e) => updatePost(e)}/>
                            </div>
                            <div>
                                <label htmlFor="description">Description:</label>
                                <input type="text" id="description" className="post-input" placeholder="" onChange={(e) => updatePost(e)}/>
                            </div>
                            
                        </div>
                        <div className="actions">
                            <button onClick={() => cancel()}>Cancel</button>
                            <button onClick={() => submitPost()}>Add Post</button>
                        </div>
                    </div>
            </main>
            <footer role="content-info">Footer</footer>
        </>
    )
}