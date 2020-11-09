import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import PostImage from './PostImage'

Posts.defaultProps = {
    username: 'how to join tables?',
    avatarUrl: 'missing from db',
    date_created: '2000-01-01T00:00:00.000Z',
    repost: 'missing from db',
    repostedBy: 'missing from db',
}


export default function Posts(props){

    const { 
        username, 
        avatarUrl, 
        repost, 
        repostedBy,
        title,
        date_created, 
    } = props

    const description = props.desc_post
    const imageUrl = props.pic

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
        <section className='post-wrapper'>
            {repost && <p className='post-repost-info'>reposted by <Link to={`/profile/${repostedBy}`}>{repostedBy}</Link></p>}
            <div className="post">
                <div className="post-attribution">
                    <img src={avatarUrl} alt="avatar" />
                    <p><Link to={`/profile/${username}`}>{username}</Link></p>
                </div>
                <div className='post-img'>
                    <PostImage src={imageUrl} />
                </div>
                <div className="post-actions">
                    <button onClick={() => handleLike()}>Like</button>
                    <button onClick={() => postComment()}>Comment</button>
                    <button onClick={() => handleRepost()}>Repost</button>
                </div>
                <div className='post-info'>
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <p className="timestamp">{format(Date.parse(date_created), 'MMM do yyyy')}</p>
                </div>
            </div>
        </section>
    )

}

