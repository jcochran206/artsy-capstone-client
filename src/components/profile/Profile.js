import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import ApiService from '../../services/api-service'
import Followers from './Followers'
import ProfileEdit from './Profile-Edit'
import ProfileFeed from './ProfileFeed'

export default function Profile(props){
    const [profileOption, setOptions] = useState('post')
    const [profileInfo, setInfo] = useState({})
    const [edit, show] = useState(false)
    const pathuserid = props.match.params.id
    const context = useContext(UserContext)

    const isMe = pathuserid === context.user.username

    useEffect(() => {
        if(isMe){
         return ApiService.getProfileInfo(context.user.user_id)
                 .then(res => setInfo(res))    
        }else{
            return ApiService.getProfileInfo(pathuserid) //this needs to be userid for the profile we vists. How to get that
        }
    }, [pathuserid, context, isMe, setInfo])

    const showOptions = (option) => {
        setOptions(option)
    }

    return(
            <div className="profile">
            <div className="profile-header">
                <div className="title">
                    {/* <div className='image-container'>
                        <img className='profile-image' alt='profile' src="#" />
                    </div> */}
                    <div className='username-container'>
                        <h2>{profileInfo.username}</h2>
                        <div className="profile-details">
                            <p>{profileInfo.bio}</p>
                        </div>
                    </div>
                    {isMe ? 
                        <button onClick={() => show(true)}>edit profile</button> 
                        : 
                        <button onClick={() => console.log('follow')}>Follow</button>}
                </div>
            </div>
            <ul className='navlinks'>
                <li onClick={() => props.history.push('/feed/home')}>Feed</li>
                <li onClick={() => showOptions('post')}>Posts/Reposts</li>
                <li onClick={() => showOptions('likes')}>Likes</li>
                <li onClick={() => showOptions('follows')}>Followers/Following</li>
            </ul>
            {edit && <ProfileEdit show={show}/>}
            {profileOption === 'post' && <ProfileFeed type={'user'} isMe={isMe} username={pathuserid}/>}
            {profileOption === 'likes' && <ProfileFeed type={'likes'} isMe={isMe} username={pathuserid} />}
            {profileOption === 'follows' && <Followers isMe={isMe} username={pathuserid} />}
        </div>
    )
}

