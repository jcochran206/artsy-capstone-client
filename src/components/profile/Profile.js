import { useEffect, useState } from 'react'
import TokenService from '../../services/token-service'
import UserService from '../../services/user-service'
import ApiService from '../../services/api-service'
import FollowService from '../../services/followers-service'
import Followers from './Followers'
import ProfileFeed from './ProfileFeed'
import AvatarIcon from '../icons/AvatarIcon'


export default function Profile(props) {
    const [profileOption, setOptions] = useState('post')
    const [profileInfo, setInfo] = useState(null)
    const [followed, setFollowed] = useState(false)
    const pathuserid = props.match.params.id

    const userId = UserService.getUser('userid')
    const username = UserService.getUser('username')
    const isMe = pathuserid === username

    useEffect(() => {
        if (isMe) {
            return ApiService.getProfileInfo(userId)
                .then(res => setInfo(res))
        } else {
            UserService.getUserIdrWithUsername(pathuserid)
                .then(res => {
                    return ApiService.getProfileInfo(res.id)
                        .then(res => setInfo(res))
                })
        }
    }, [pathuserid, userId, isMe, setInfo])

    const showOptions = (option) => {
        setOptions(option)
    }

    const handleProfileEdit = () => {
        window.location = `/edit-profile/${profileInfo.id}`;
    }

    const handleLogoutClick = () => {
        UserService.clearUser()
        TokenService.clearAuthToken()
        window.location = '/';

    }

    const followUser = () => {
        return FollowService.followUser(profileInfo.id)
            .then(res => setFollowed(true))
    }

    const UnfollowUser = () => {
        return FollowService.unfollowUser(profileInfo.id)
            .then(res => setFollowed(false))
    }
    const evaluateFollow = () => {
        if (isMe) {
            return <div className="button" role="button" onClick={() => handleProfileEdit()}>Edit Profile</div>
        }
        else {
            if (followed) {
                return <div className="button button--follow" role="button" onClick={() => UnfollowUser()}>UnFollow</div>
            }
            return <div className="button button--follow" role="button" onClick={() => followUser()}>Follow</div>
        }
    }

    //{!profileInfo ? <Loading/> : <>...</>}
    return (
        <main>
            {profileInfo &&
                <div className="profile">
                    <div className="profile-header">
                        <div className='username-container'>
                            <AvatarIcon className='icon icon--profile' />
                            <h2 className="title profile__title">{profileInfo.username}</h2>
                            <p className="profile__bio">{profileInfo.bio}</p>
                        </div>
                        <div className="input__actions input__actions--profile">
                            {evaluateFollow()}
                            {isMe && <div className="button" role="button" onClick={handleLogoutClick}>Logout</div>}
                        </div>
                    </div>
                    <ul className='nav__links'>
                        {/* <li onClick={() => props.history.push('/feed/home')}>Feed</li> */}
                        <li onClick={() => showOptions('post')}>Posts</li>
                        {/* <li onClick={() => showOptions('follows')}>Followers/Following</li> */}
                        <li onClick={() => showOptions('following')}>Following</li>
                        <li onClick={() => showOptions('followers')}>Followers</li>
                    </ul>

                    {profileOption === 'post' && 
                        <ProfileFeed type={'user'} isMe={isMe} userid={profileInfo.id} />
                    }

                    {(profileOption === 'followers' || profileOption === 'following') && 
                        <Followers isMe={isMe} userid={profileInfo.id} option={profileOption}/>
                    }

                </div>
            }
        </main>
    )
}

