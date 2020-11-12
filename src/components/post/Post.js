import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import PostImage from './PostImage'
import UserService from '../../services/user-service'

import AvatarIcon from '../icons/AvatarIcon'
import HeartIcon from '../icons/HeartIcon'
import CommentIcon from '../icons/CommentIcon'
import ShareIcon from '../icons/ShareIcon'
import EditIcon from '../icons/EditIcon'


import {
    CgProfile,
} from 'react-icons/cg'

import {
    AiOutlineComment,
} from 'react-icons/ai'

import {
    RiEditLine,
    RiHeartLine,
    RiShareBoxLine,
} from 'react-icons/ri'

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

    useEffect(() => {
        if (Number(userIdOfUser) === Number(user_id)) {
            setMyPost(true)
        }
    }, [myPost, userIdOfUser, user_id])


    const { 
        id,
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

    return(
        <section className='post-wrapper'>
            
            <div className="post">
                <div className="post-attribution">
                    {/* <img src={avatarUrl} alt="avatar" /> */}
                    <div className="post-user">
                        <AvatarIcon className='icon' />
                        <p className="post-username"><Link to={`/profile/${username}`}>{username}</Link></p>
                    </div>
                    {repost && <p className='post-repost-username'>reposted by <Link to={`/profile/${repostedBy}`}>{repostedBy}</Link></p>}
                </div>
                <div className='post-img'>
                    <PostImage src={imageUrl} />
                </div>
                
                <div className='post-info'>
                    <ul>
                        <li className="title"><h2>{title}</h2></li>
                        <li className="description">{description}</li>
                        <li className="timestamp">{format(Date.parse(date_created), 'MMM do yyyy')}</li>
                    </ul>
                </div>
                <div className="post-actions">
                    <div 
                        className="button-icon" 
                        role="button" 
                        id="toggle"
                        tabIndex="0" 
                        aria-label="like post"
                        aria-pressed="false"
                        onClick={() => handleLike()} >
                        <HeartIcon className='icon' />
                    </div>
                    <div 
                        className="button-icon" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="comment"
                        onClick={() => postComment()} >
                        <CommentIcon className='icon' />
                    </div>
                    {/* TODO: Conditional ==> if (user's post), Edit button, else Repost button */}
                    {!myPost && <div 
                        className="button-icon" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="repost"
                        onClick={() => handleRepost()} >
                        <ShareIcon className='icon' />
                    </div>}
                    {myPost && <div 
                        className="button-icon" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="edit"
                        onClick={() => handleEdit()} >
                        <EditIcon className='icon' />
                    </div>}
                     
                    {/* <button onClick={() => handleEdit()}>Edit</button> */}
                    {/* <Link to={`/edit/${id}`}><RiEditLine /></Link> */}
                </div>
                {/* <div className='post-info'>
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <p className="timestamp">{format(Date.parse(date_created), 'MMM do yyyy')}</p>
                    <div className='comments-container'>
                        <p>{comments}</p>
                    </div>
                </div> */}
            </div>
        </section>
    )

}

