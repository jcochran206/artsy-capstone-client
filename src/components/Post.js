import { Link } from 'react-router-dom'
import PostImage from './PostImage'

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
    const cancel = () => {
        
    }

    return(
    <section className='post-wrapper'>
        {props.repost && <p className='post-repost-info'>reposted by <Link to={`/profile/${props.repostedBy}`}>{props.repostedBy}</Link></p>}
        <div className="post">
            <div className="post-attribution">
                <img src={props.avactarsrc} alt="avatar" />
                <p><Link to={`/profile/${props.username}`}>{props.username}</Link></p>
            </div>
            <div className='post-img'>
                <PostImage src={props.postsrc}/>
            </div>
            <div className="post-actions">
                <button onClick={() => handleLike()}>Like</button>
                <button onClick={() => postComment()}>Comment</button>
                <button onClick={() => handleRepost()}>Repost</button>
            </div>
            <div className='post-info'>
                <p className="info">{props.description}</p>
                <p className="timestamp">{props.timestamp}</p>
            </div>
        </div>
    </section>
    )

}