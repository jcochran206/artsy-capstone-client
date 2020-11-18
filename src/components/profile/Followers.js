import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import FollowService from '../../services/followers-service'
import UserService from '../../services/user-service'

export default function Followers(props){

    const [followOption, set] = useState(true)
    const [follows, setFollow] = useState([])

    useEffect(() => {
        if(followOption){
            FollowService.showFollowing(props.userid) //shows people that YOU FOLLOW
            .then(res => setFollow(res))
        }else{
            FollowService.showFollowers(props.userid) //shows people that FOLLOW YOU
            .then(res => 
                setFollow(res))
        }
    
    }, [props.userid, followOption, setFollow])

    
    const displayFollow = () => {
        return follows.map((user, i) => {
            return (
                <Follow {...user} key={i} />
            )
        })
    }

    //currently just shows people that you follow
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
                        {/* <img src={props.avatarsrc} alt="avatar" /> */}
                        <p><Link to={`/profile/${props.username}`}>{props.username}</Link></p>
                        {/* <button className='following' onClick={() => follow(props.following, props.link)}>
                          {props.following ? 'Follow' : 'Unfollow'} 
                        </button>   */}
            </div>
    )
}