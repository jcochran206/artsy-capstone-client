import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiService from "../../services/api-service"
import UserService from "../../services/user-service"

export default function Comments(props){
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    useEffect(() => {
        ApiService.getCommentsInPost(props.post_id)
        .then(res => setComments(res))
    }, [props.post_id, setComments])

    const updateComment = (e) => {
        e.preventDefault()
        const {id, value} = e.target
        setNewComment({[id]: value})
    }

    const addComment = (e) => {
        e.preventDefault()
        ApiService.PostComment(newComment, props.post_id)
        return setNewComment({})
    }

    console.log(props.post_id)
    return(
        <>
            {comments.map((comment, i) => {
                return <IndividualComment key={i} {...comment} />
            })}
            <form onSubmit={(e) => addComment(e)}>
                <input type='text' id='comment' onChange={(e) => updateComment(e)}/>
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