import { Link } from 'react-router-dom'

export default function Posts(props){

    const handleLike = () =>{
        console.log('liked')
    }

    const handleRepost = () => {
        console.log('repost')
    }

    const postComment = () => {
        console.log('comment')
    }

    return(
    <div className="post">
        <div className="attribution">
            <img src={props.src} alt="avatar" />
        <p><Link to={`/profile/${props.username}`}>{props.username}</Link></p>
        </div>
        <div className="actions">
            <button onClick={() => handleLike()}>Like</button>
            <button onClick={() => postComment()}>Comment</button>
            <button onClick={() => handleRepost()}>Repost</button>
        </div>
        <div className="info">{props.description}</div>
    <div className="timestamp">{props.timestamp}</div>
    </div>

    )

}