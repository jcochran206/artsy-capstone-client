import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiService from "../../services/api-service"
import AvatarIcon from '../icons/AvatarIcon'

export default function Comments(props){
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    useEffect(() => {
        ApiService.getCommentsInPost(props.post_id)
        .then(res => setComments(res))
    }, [props.post_id, setComments])

    const updateComment = (e) => {
        e.preventDefault()
        const { value } = e.target
        setNewComment(value)
    }

    const addComment = (e) => {
        e.preventDefault()
        ApiService.PostComment(newComment, props.post_id)
        .then(res => setComments([...comments, res]))
        return setNewComment('')
    }

    return(
        <div className="comments__container">
            {comments.map((comment, i) => {
                return <IndividualComment key={i} {...comment} />
            })}
            <form className="comments__form" onSubmit={(e) => addComment(e)}>
                <div className="inputgroup inputgroup--comments">
                    <input type='text' 
                        id='desc_comment' 
                        className="input"
                        placeholder="Comment"
                        value={newComment}
                        onChange={(e) => updateComment(e)} 
                        required/>
                    <input type='submit' 
                        value='Submit' 
                        className='button'
                    />
                </div>
                
            </form>
        </div>
    )
}

const IndividualComment = (props) => {
    const {username, desc_comment } = props

    return (
        <>
            {/* <Link to={`/profile/${props.username}`}>{props.username}</Link>
            <p>{props.desc_comment}</p> */}

            <div className="post__attribution">
                <div className="post__user" >
                <AvatarIcon className='icon icon--commentary' />
                    <p className="post__username">
                        <Link to={`/profile/${username}`}>{username}</Link> <span className="post__username--commentary">{desc_comment}</span>
                    </p>
                </div>
            </div>
        </>
    )
}