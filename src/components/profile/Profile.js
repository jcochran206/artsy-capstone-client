import { useEffect, useState } from 'react'
import TokenService from '../../services/token-service'
import UserService from '../../services/user-service'
import ApiService from '../../services/api-service'
import Followers from './Followers'
import ProfileEdit from './Profile-Edit'
import ProfileFeed from './ProfileFeed'

export default function Profile(props){
    const [profileOption, setOptions] = useState('post')
    const [profileInfo, setInfo] = useState({})
    const [edit, show] = useState(false)
    const pathuserid = props.match.params.id
    
    
    const userId = UserService.getUser('userid')
    const username = UserService.getUser('username')
    const isMe = pathuserid === username

    useEffect(() => {
        if(isMe){
         return ApiService.getProfileInfo(userId)
                 .then(res => setInfo(res))    
        }else{
            return ApiService.getProfileInfo(pathuserid)
            .then(res => setInfo(res)) //this needs to be userid for the profile we vists. How to get that
        }
    }, [pathuserid, userId, isMe, setInfo])

    const showOptions = (option) => {
        setOptions(option)
    }

    const handleLogoutClick = () => {
        UserService.clearUser()
        TokenService.clearAuthToken()
        window.location = '/';

    }

    return(
        <main>
            <div className="profile">
                <div className="profile-header">
                    <div className="title">
                        {/* <div className='image-container'>
                            <img className='profile-image' alt='profile' src="#" />
                        </div> */}
                        <div className='username-container'>
                            <h2>{profileInfo.username}</h2>
                            <p>{profileInfo.bio}</p>
                        </div>
                        {isMe ? 
                            <button className='profile-button' onClick={() => show(true)}>edit profile</button> 
                            : 
                            <button className='profile-button' onClick={() => console.log('follow')}>Follow</button>}
                        {isMe && <button className='profile-button' onClick={handleLogoutClick}>Logout</button>}
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
        </main>
    )
}

