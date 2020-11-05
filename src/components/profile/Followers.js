import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Followers(){
    const [followOption, set] = useState(true) //true shows following false shows followers
    const fakeFollowers = [
        {
            username: 'userid1',
            avatarsrc: '#',
            link: '/profile/userid1',
            following: false
        },
        {
            username: 'userid2',
            avatarsrc: '#',
            link: '/profile/userid2',
            following: false
        },
        {            
            username: 'userid3',
            avatarsrc: '#',
            link: '/profile/userid3',
            following: false
        },
        {
            username: 'userid4',
            avatarsrc: '#',
            link: '/profile/userid4',
            following: true
        },
        {
            username: 'userid5',
            avatarsrc: '#',
            link: '/profile/userid5',
            following: true
        },
        {
            username: 'userid6',
            avatarsrc: '#',
            link: '/profile/userid6',
            following: false
        },
        {
            username: 'userid7',
            avatarsrc: '#',
            link: '/profile/userid7',
            following: true
        },
    ]
    const fakeFollowing = [
        {
            username: 'userid1',
            avatarsrc: '#',
            link: '/profile/userid1',
            following: true,
        },
        {
            username: 'userid2',
            avatarsrc: '#',
            link: '/profile/userid2',
            following: true,
        },
        {
            username: 'userid3',
            avatarsrc: '#',
            link: '/profile/userid3',
            following: true,
        },
        {
            username: 'userid4',
            avatarsrc: '#',
            link: '/profile/userid4',
            following: true,
        },
        {
            username: 'userid5',
            avatarsrc: '#',
            link: '/profile/userid5',
            following: true,
        },
        {
            username: 'userid6',
            avatarsrc: '#',
            link: '/profile/userid6',
            following: true,
        },
    ]

    const displayFollow = () => {
        if(followOption){
            return fakeFollowers.map((user, i) => {
                return (
                    <Follow {...user} key={i} />
                )
            })
        }else{
            return fakeFollowing.map((user, i) => {
                return (
                    <Follow {...user} key={i} />
                )
            })
        }
    }
    return(
        <div className='user-container'>
            <div className='button-container'>
                <button className='switch' onClick={() => set(false)}>Followers</button>
                <button className='switch' onClick={() => set(true)}>Following</button>
            </div>

           {displayFollow()} 
            
        </div>
    )
}

const Follow = (props) => {
    const follow = (following, userid) => {
        //make a post request to either follow or unfollow person 
       
        following ? console.log('you have unfollowed this user') : console.log('you have followed this user')
    }

    return (
            <div className="user">
                        <img src={props.avatarsrc} alt="avatar" class="lg-avatar"/>
                        <p><Link to={props.link}>{props.username}</Link></p>
                        <button className='following' onClick={() => follow(props.following, props.link)}>
                          {props.following ? 'Follow' : 'Unfollow'} 
                        </button>  
            </div>
    )
}