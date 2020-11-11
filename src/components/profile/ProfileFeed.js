import { useEffect, useState } from 'react'
import PostImage from '../post/PostImage'

export default function ProfileFeed(props){
    //need to fetch all posts assosciated with them depending on the user id || what the user liked
    //right now props is just getting dummy data associated with the Profile component 
    //but when we start fetching props will need to contain the id associated with the user
    const [posts, set] = useState([])
    const type = props.type //type allows us to know if we are filtering by likes or posts
    useEffect(() => {
        if(type === 'user'){
            if(props.isMe){
                set([])
            }else{
                set([])
            }
        }
        if(type === 'likes'){
            if(props.isMe){
                set([])
            }else{
                set([])
            }        
        }
    }, [props.isMe, type, set])

    return(
        <>
            <div className='profile-feed' >
                {/* {props.data.map((photo, i) => {
                    return(
                        <div key={i} className="post-container">
                            <PostImage key={i} src={photo.postsrc} />
                        </div>
                    )
                })} */}
            </div>
        </>
    )
}