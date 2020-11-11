import Post from '../post/Post'
import ApiService from '../../services/api-service'
import { useEffect, useState } from 'react'

export default function Feed(props){
    const [posts, set] = useState([])
    const type = props.match.params.id 

    useEffect(() => {
        if(type === 'home'){
            set([])
            //get feed/home/userid
        }
        if(type === 'explore'){
            ApiService.getExplorePosts()
            .then(res => set(res))    
        }

    }, [type, set])

    const displayPost = () => {
        return posts.map((x, i) => {
            return <Post {...x} key={i} history={props.history}/> //timeline/explore posts
        })
    }

    return(
    <>
        <main>
                <div className="feed">
                    <div className="postcontainer">
                        {displayPost()}
                    </div>
                </div>
        </main>
    </>
    )
}

