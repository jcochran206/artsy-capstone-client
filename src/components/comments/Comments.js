import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiService from "../../services/api-service"

export default function Comments(props){
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState(null)

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
        return setNewComment(null)
    }

    console.log(comments)
    return(
        <>
            {comments.map((comment, i) => {
                return <IndividualComment key={i} {...comment} />
            })}
            <form onSubmit={(e) => addComment(e)}>
                <input type='text' id='desc_comment' placeholder={newComment} onChange={(e) => updateComment(e)} required/>
                <input type='submit' value='submit' />
            </form>
        </>
    )
}

const IndividualComment = (props) => {
    return (
        <>
            <Link to={`/profile/${props.username}`}>{props.username}</Link>
            <p>{props.desc_comment}</p>
        </>
    )
}