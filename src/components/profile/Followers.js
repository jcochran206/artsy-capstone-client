import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FollowService from '../../services/followers-service'
import UserService from '../../services/user-service'

export default function Followers(props) {
    const { option } = props
    const [follows, setFollow] = useState([])

    useEffect(() => {
        if (option === 'following') {
            // shows people that YOU FOLLOW aka 'FOLLOWING'
            FollowService.showFollowing(props.userid) 
                .then(res => setFollow(res))
        } else {
            //shows people that FOLLOW YOU aka 'FOLLOWERS'
            FollowService.showFollowers(props.userid) 
                .then(res =>
                    setFollow(res))
        }

    }, [props.userid, option, setFollow])


    const displayFollow = () => {
        return follows.map((user, i) => {
            return (
                <Follow {...user} key={i} />
            )
        })
    }

    console.log('follows state: ', follows)
    return (
        <div className='user-container'>
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