import PostsList from './PostsList'

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
        <footer role="content-info">Footer</footer>
    </>
    )
}

