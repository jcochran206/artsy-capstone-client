import { useEffect, useState } from 'react'
import TokenService from '../../services/token-service'
import UserService from '../../services/user-service'
import ApiService from '../../services/api-service'
import Followers from './Followers'
import ProfileEdit from './Profile-Edit'
import ProfileFeed from './ProfileFeed'
import { set } from 'date-fns'

export default function Profile(props){
    const [profileOption, setOptions] = useState('post')
    const [profileInfo, setInfo] = useState({})
    const [edit, show] = useState(false)
    const [followed, setFollowed] = useState(false)
    const pathuserid = props.match.params.id
    
    const userId = UserService.getUser('userid')
    const username = UserService.getUser('username')
    const isMe = pathuserid === username

    useEffect(() => {
        if(isMe){
         return ApiService.getProfileInfo(userId)
                 .then(res => setInfo(res))    
        }else{
            UserService.getUserIdrWithUsername(pathuserid)
            .then(res => {
                return ApiService.getProfileInfo(res.id)
                .then(res => setInfo(res))
            })
        }
    }, [pathuserid, userId, isMe, setInfo])

    const updateProfile = (update) => {
        return UserService.updateUser(userId, update)
        .then(res => {
            show(false)
            setInfo({...profileInfo, bio: res.bio})
        })
    }

    const showOptions = (option) => {
        setOptions(option)
    }

    const handleLogoutClick = () => {
        UserService.clearUser()
        TokenService.clearAuthToken()
        window.location = '/';

    }

    const followUser = () => {
        return ApiService.followUser(pathuserid)
        .then(res => setFollowed(true))
    }

    const UnfollowUser = () => {
        return ApiService.unfollowUser(pathuserid)
        .then(res => setFollowed(false))
    }
    const evaluateFollow = () => {
        if(isMe){
            return <div className="button" role="button" onClick={() => show(true)}>Edit Profile</div> 
        }
        else{
            if(followed){
                return <div className="button" role="button" onClick={() => UnfollowUser()}>UnFollow</div>
            }
            return <div className="button" role="button" onClick={() => followUser()}>Follow</div>
        }   
    }
    
    return(
        <main>
            <div className="profile">
                <div className="profile-header">
                    <div className="title">
                        <div className='username-container'>
                            <h2>{profileInfo.username}</h2>
                            <p>{profileInfo.bio}</p>
                        </div>
                        {evaluateFollow()}
                        {isMe && <div className="button" role="button" onClick={handleLogoutClick}>Logout</div>}
                    </div>
                </div>
            <ul className='nav__links'>
                <li onClick={() => props.history.push('/feed/home')}>Feed</li>
                <li onClick={() => showOptions('post')}>Posts</li>
                <li onClick={() => showOptions('follows')}>Followers/Following</li>
            </ul>
            {edit && <ProfileEdit updateProfile={updateProfile} show={show}/>}
            {profileOption === 'post' && <ProfileFeed type={'user'} isMe={isMe} userid={profileInfo.id}/>}
            {profileOption === 'follows' && <Followers isMe={isMe} userid={profileInfo.id}/>}
        </div>
    </main>
    )
}

