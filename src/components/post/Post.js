import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import PostImage from './PostImage'
import UserService from '../../services/user-service'
import {RiUserFollowLine} from 'react-icons/ri'

import AvatarIcon from '../icons/AvatarIcon'
import HeartIcon from '../icons/HeartIcon'
import CommentIcon from '../icons/CommentIcon'
import ShareIcon from '../icons/ShareIcon'
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

    const handleLike = () =>{
        console.log('liked')
    }
    const postComment = () => {
        console.log('comment')
    }
    const handleRepost = () => {
        console.log('repost')
    }
    const handleEdit = () => {
        console.log('repost')
        window.location = `/edit/${id}`;
    }
    const handleFollow = () => {
        console.log('followed')
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
                        id="toggle"
                        tabIndex="0" 
                        aria-label="like post"
                        aria-pressed="false"
                        onClick={() => handleLike()} >
                        <HeartIcon className='icon' />
                    </div>
                    <div 
                        className="icon icon--post" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="comment"
                        onClick={() => postComment()} >
                        <CommentIcon className='icon' />
                    </div>
                    {!myPost && <div 
                        className="icon icon--post" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="repost"
                        onClick={() => handleRepost()} >
                        <ShareIcon className='icon' />
                    </div>}
                    {myPost && <div 
                        className="icon icon--post" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="edit"
                        onClick={() => handleEdit()} >
                        <EditIcon className='icon' />
                    </div>}
                   {!myPost && <div 
                        className="button-icon" 
                        role="button" 
                        id="toggle"
                        tabIndex="0" 
                        aria-label="like post"
                        aria-pressed="false"
                        onClick={() => handleFollow()} >
                        <RiUserFollowLine />
                    </div>}
                </div>
            </div>
        </section>
    )

}

