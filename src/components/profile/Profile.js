import { useState } from 'react'
import Followers from './Followers'
import ProfileEdit from './Profile-Edit'
import ProfileFeed from './ProfileFeed'

export default function Profile(props){
    const [profileOption, setOptions] = useState('post')
    const [edit, show] = useState(false)
    //create fetch request for profile information 
    //and for posting/likes/and repost info
    const data = [
        {
            postsrc: '#',
            description: 'post 1',
            timestamp: 'Oct 31'
        },
        {
            postsrc: '#',
            description: 'post 2',
            timestamp: 'Nov 1'
        },
        {

            postsrc: '#',
            description: 'post 3',
            timestamp: 'Nov 2'
        },
        {
            postsrc:'#',
            description: 'post 4',
            timestamp: 'Nove 3'
        },
        {
            postsrc: '#',
            description: 'post 5',
            timestamp: 'Nov 4'
        },
    ]

    const showOptions = (option) => {
        setOptions(option)
    }

    return(
            <div className="profile">
            <div className="profile-header">
                <div className="title">
                    <div className='image-container'>
                        <img className='profile-image' alt='profile' src="#" />
                    </div>
                    <div className='username-container'>
                        <h2>username here</h2>
                        <div className="profile-details">
                            <p>Bio here</p>
                        </div>
                    </div>
                    <button onClick={() => show(true)}>edit profile</button>
                </div>
            </div>
            <ul className='navlinks'>
                <li onClick={() => props.history.push('/feed/home')}>Feed</li>
                <li onClick={() => showOptions('post')}>Posts/Reposts</li>
                <li onClick={() => showOptions('likes')}>Likes</li>
                <li onClick={() => showOptions('follows')}>Followers/Following</li>
            </ul>
            {edit && <ProfileEdit show={show}/>}
            {profileOption === 'post' && <ProfileFeed type={'user'} data={data} />}
            {profileOption === 'likes' && <ProfileFeed type={'likes'} data={data} />}
            {profileOption === 'follows' && <Followers />}
        </div>
    )
}

