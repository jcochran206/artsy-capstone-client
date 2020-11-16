import { useEffect, useState } from 'react'
import Post from '../post/Post'
import ApiService from '../../services/api-service'
import UserService from '../../services/user-service'
import { Link } from 'react-router-dom'

export default function Feed(props){
    const [posts, set] = useState([])
    const type = props.match.params.id 
    const myId = UserService.getUser('userid')

    useEffect(() => {
        if (type === 'home'){
            set([])
        }
        if (type === 'explore'){
            ApiService.getExplorePosts()
            .then(res => set(res))    
        }

    }, [myId, type, set])

    const displayPost = () => {
        if (type === 'home' && posts.length === 0) {
            return (
                <div className="home__intro">
                    <h1>Welcome!</h1>
                    <p>This is your new artsy homepage.</p> 
                    <p>Eventually it will display a personalized feed of posts by people you follow.</p> 
                    <p>It's currently empty because you aren't following anyone yet... but that's easy to remedy.</p> 
                    <p><Link to='/feed/explore' className='signin__buttonlink'>Head over to the artsy explore feed.</Link> There you will see posts from across the artsy community and you can begin following some people!</p>
                    <p>Once you do, come back home...</p>
                </div>
            )
        }
        return posts.map((x, i) => {
            return <Post {...x} key={i} history={props.history}/> //feed of posts
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

