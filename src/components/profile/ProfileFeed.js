import { useEffect, useState } from 'react'
import ApiService from '../../services/api-service'
import Post from '../post/Post'

export default function ProfileFeed(props){
    const [posts, set] = useState([])
    const { userid } = props

    useEffect(() => {
                ApiService.getPostsInProfile(userid)
                .then(res => set(res))

    }, [userid, set])

    return(
        <>
            <div className='profile-feed' >
                {posts.map((photo, i) => {
                    return(
                        <div key={i} className="post-container">
                            <Post {...photo}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}