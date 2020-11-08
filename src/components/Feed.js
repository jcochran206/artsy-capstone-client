import PostsList from './Post'

export default function Feed(props){
    const type = props.match.params.id //this will be used to know if we are in the Home Feed or Explore Page
    //create fetch request

    if(type === 'home'){
        console.log(type)
    }
    if(type === 'explore'){
        
    }
    const data = [
        {
            repost: false,
            repostedBy: '',
            avatarsrc: '#',
            postsrc:'#',
            username: 'user1',
            description: 'post 1',
            timestamp: 'Oct 31'
        },
        {
            repost: false,
            repostedBy: '',
            avatarsrc: '#',
            postsrc:'#',
            username: 'user2',
            description: 'post 2',
            timestamp: 'Nov 1'
        },
        {
            repost: true,
            repostedBy: 'user1',
            avatarsrc: '#',
            postsrc:'#',
            username: 'user3',
            description: 'post 3',
            timestamp: 'Nov 2'
        },
        {
            repost: false,
            repostedBy: '',
            avatarsrc: '#',
            postsrc:'#',
            username: 'user4',
            description: 'post 4',
            timestamp: 'Nove 3'
        },
        {
            repost: true,
            repostedBy: 'user2',
            avatarsrc: '#',
            postsrc:'#',
            username: 'user5',
            description: 'post 5',
            timestamp: 'Nov 4'
        },
    ]

    const displayPost = () => {
        return data.map((x, i) => {
            return <PostsList {...x} key={i} /> //timeline/explore posts
        })
    }

    return(
    <>
        <main role="main">
                <div className="feed">
                    <div className="postcontainer">
                        {displayPost()}
                    </div>
                </div>
        </main>
    </>
    )
}

