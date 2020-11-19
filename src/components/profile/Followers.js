import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FollowService from '../../services/followers-service'
import AvatarIcon from '../icons/AvatarIcon'

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
                .then(res => setFollow(res))
        }

    }, [props.userid, option, setFollow])


    const displayFollow = () => {
        return follows.map((user, i) => {
            return (
                <Follow {...user} key={i} />
            )
        })
    }

    return (
        <div className='followers__container'>
            {displayFollow()}
        </div>
    )
}

const Follow = (props) => {
    const { username } = props
    // const follow = (following, userid) => {
    //     //make a post request to either follow or unfollow person 

    //     following ? console.log('you have unfollowed this user') : console.log('you have followed this user')
    // }

    return (
        <div className="follower">
            {/* // v1 as list */}
            <div className="post__attribution">
                <div className="post__user" >
                    <AvatarIcon className='icon' />
                    <p className="post__username">
                        <Link to={`/profile/${username}`}>{username}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}