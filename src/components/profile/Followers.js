import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ApiService from '../../services/api-service'

export default function Followers(props){
    const [followOption, set] = useState(true) //true shows following false shows followers
    const [follows, setFollow] = useState([])

    useEffect(() => {
        if(props.isMe){
            if(followOption === true){ //retrieve who the user is following
                ApiService.showFollowers().then(res => console.log(res))
                setFollow([])
            }else{
                setFollow([])
            }
        }else{
            if(followOption === false){ //retrieve who followers the user
                setFollow([])
            }else{
                setFollow([])
            }        
        }
    }, [props.isMe, followOption, setFollow])

    console.log(followOption)
    const displayFollow = () => {
        return follows.map((user, i) => {
            return (
                <Follow {...user} key={i} />
            )
        })
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
                        <img src={props.avatarsrc} alt="avatar" />
                        <p><Link to={props.link}>{props.username}</Link></p>
                        <button className='following' onClick={() => follow(props.following, props.link)}>
                          {props.following ? 'Follow' : 'Unfollow'} 
                        </button>  
            </div>
    )
}