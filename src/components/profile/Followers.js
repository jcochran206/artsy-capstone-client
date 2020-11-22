import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FollowService from '../../services/followers-service'
import AvatarIcon from '../icons/AvatarIcon'

export default function Followers(props) {
    const { option } = props
    const [follows, setFollow] = useState([]) //depending on what the option is it will be populated with the followers or following

    useEffect(() => {
        if (option === 'following') {
            FollowService.showFollowing(props.userid) 
                .then(res => setFollow(res))
        } else {
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

    return (
        <div className="follower">
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