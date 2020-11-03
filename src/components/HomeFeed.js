import Link from 'react-router-dom'

export default function HomeFeed(props){
    const type = props.match.params.id //this will be used to know if we are in the Home Feed or Explore Page
    
    const data = [
        {
            src: '#',
            username: 'user1',
            description: 'post 1',
            timestamp: 'Oct 31'
        },
        {
            src: '#',
            username: 'user2',
            description: 'post 2',
            timestamp: 'Nov 1'
        },
        {
            src: '#',
            username: 'user3',
            description: 'post 3',
            timestamp: 'Nov 2'
        },
        {
            src: '#',
            username: 'user4',
            description: 'post 4',
            timestamp: 'Nove 3'
        },
        {
            src: '#',
            username: 'user5',
            description: 'post 5',
            timestamp: 'Nov 4'
        },
    ]

    const displayPost = () => {
        return data.map((x, i) => {
            return <Posts {...x} key={i} />
        })
    }

    return(
    <>
        <Nav />
        <main role="main">
                <div className="feed">
                    <div className="postcontainer">
                        {displayPost()}
                    </div>
                </div>
        </main>
        <footer role="content-info">Footer</footer>
    </>
    )
}

const Nav = () => {
    //map over list and change selected to whichever is clicked
    <nav className="nav" role="navigation">
    <ul>
        <li><span className="logo">Artsy</span></li>
        <li className= "selected"><Link to=''>Home</Link></li>
        <li className= ""><Link to=''>Explore</Link></li>
        <li className= ""><Link to=''>Post</Link></li>
        <li className= ""><Link to=''>Profile</Link></li>
        <li className= ""><Link to=''>Search</Link></li> 
    </ul>
</nav>
}

const Posts = (props) => {

    const handleLike = () =>{
        console.log('liked')
    }

    const handleRepost = () => {
        console.log('repost')
    }

    const postComment = () => {
        console.log('comment')
    }

    return(
    <div className="post">
        <div className="attribution">
            <img src={props.src} alt="avatar" />
        <p><Link to={`/profile/${props.username}`}>{props.username}</Link></p>
        </div>
        <div className="actions">
            <button onClick={() => handleLike()}>Like</button>
            <button onClick={() => postComment()}>Comment</button>
            <button onClick={() => handleRepost()}>Repost</button>
        </div>
        <div className="info">{props.description}</div>
    <div className="timestamp">{props.timestamp}</div>
    </div>

    )

}