import { useEffect, useState } from 'react'
import ApiService from '../../services/api-service'
import UserService from '../../services/user-service'
import PostImage from '../post/PostImage'

export default function ProfileFeed(props){
    //need to fetch all posts assosciated with them depending on the user id || what the user liked
    //right now props is just getting dummy data associated with the Profile component 
    //but when we start fetching props will need to contain the id associated with the user
    const [posts, set] = useState([])
    const { userid } = props
    useEffect(() => {
                ApiService.getPostsInProfile(userid)
                .then(res => set([res]))

    }, [userid, set])

    return(
        <>
            <div className='profile-feed' >
                {posts.map((photo, i) => {
                    return(
                        <div key={i} className="post-container">
                            <PostImage key={i} {...photo} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}