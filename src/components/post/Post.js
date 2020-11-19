import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import PostImage from './PostImage'
import UserService from '../../services/user-service'
import Comments from '../comments/Comments'
import AvatarIcon from '../icons/AvatarIcon'
import CommentIcon from '../icons/CommentIcon'
import EditIcon from '../icons/EditIcon'


Posts.defaultProps = {
    username: ':username',
    avatarUrl: 'missing from db',
    date_created: '2000-01-01T00:00:00.000Z',
    repost: 'missing from db',
    repostedBy: ':username',
}


export default function Posts(props){
    const userIdOfUser = UserService.getUser('userid')
    const { user_id } = props
    const [myPost, setMyPost] = useState(false)
    const [username, setUsername] = useState('')
    const [comment, show] = useState(false)

    useEffect(() => {
        if (Number(userIdOfUser) === Number(user_id)) {
            setMyPost(true)
        }

        UserService.getUserWithUserId(user_id).then(res => {
            setUsername(res.username)
        })
    }, [myPost, setUsername, userIdOfUser, user_id])


    const { 
        id,
        title,
        date_created, 
    } = props

    const description = props.desc_post
    const imageUrl = props.pic

    const handleEdit = () => {
        window.location = `/edit/${id}`;
    }

    return(
        <section className='post__wrapper'>
            <div className="post">
                <div className="post__attribution">
                    <div className="post__user">
                    <AvatarIcon className='icon' />
                        <p className="post__username"><Link to={`/profile/${username}`}>{username}</Link></p>
                    </div>
                </div>
                <div className='post__img'>
                    <PostImage pic={imageUrl} />
                </div>
                
                <div className='post__info'>
                    <ul>
                        <li className="title"><h2>{title}</h2></li>
                        <li className="description">{description}</li>
                        <li className="timestamp">{format(Date.parse(date_created), 'MMM do yyyy')}</li>
                    </ul>
                </div>
                <div className="post__actions">
                    <div 
                        className="icon icon--post" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="comment"
                        onClick={() => show(!comment)} >
                        <CommentIcon className='icon' />
                    </div>
                    {myPost && <div 
                        className="icon icon--post" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="edit"
                        onClick={() => handleEdit()} >
                        <EditIcon className='icon' />
                    </div>}
                </div>
            {comment && <Comments post_id={id}/>}
            </div>
        </section>
    )

}

