import { useState } from 'react'
import PostsList from './Post'
import data from './faux-data'

export default function Search (props) {

    const [search, setSearch] = useState({
        searchTerm: '',
        type:'posts',
    })

    const updateSearchTerm = (term) => {
        setSearch({
            ...search, searchTerm: term
        })
    }

    const updateSearchType = (type) => {
        setSearch({
            ...search, type
        })
    }

    const displayPost = () => {
        return data.map((x, i) => {
            return <PostsList {...x} key={i} />
        })
    }

    return (
        <main role="main">
            <header>
                <SearchBox 
                    handleTermUpdate={term => updateSearchTerm(term)}
                    handleTypeUpdate={type => updateSearchType(type)}
                />
            </header>
            <div className="feed">
                <div className="postcontainer">
                    {displayPost()}
                </div>
            </div>
        </main>

    )

}

const SearchBox = (props) => {

    const { searchTerm, type } = props
    
    return (
        <div className="searchbox">
            <label htmlFor="search">Search</label>
            <input 
                name="search"
                value={searchTerm}
                placeholder="enter text"
                onChange={event => props.handleTermUpdate(event.target.value)}
            />
            <select 
                id="type"
                value={type}
                onChange={event => props.handleTypeUpdate(event.target.value)}
            >
                <option value="posts">Posts</option>
                <option value="users">Users</option>
            </select>

        </div>
    )

}