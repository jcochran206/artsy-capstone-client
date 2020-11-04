import { render } from '@testing-library/react'
import React from 'react'
import Nav from './Nav'
import PostsList from './PostsList'
import data from './faux-data';

// first pass as a class
// will then refactor as hook

export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            type:'posts',
        }
    }

    updateSearchTerm(term) {
        this.setState({
            searchTerm: term,
        })
    }

    updateSearchType(type) {
        this.setState({
            type,
        })
    }

    displayPost = () => {
        return data.map((x, i) => {
            return <PostsList {...x} key={i} /> //timeline/explore posts
        })
    }

    render () {
        console.log(this.state)
        return (
            <main role="main">
               <header>
                    <SearchBox 
                        handleTermUpdate={term => this.updateSearchTerm(term)}
                        handleTypeUpdate={type => this.updateSearchType(type)}
                    />
               </header>
               <div className="feed">
                    <div className="postcontainer">
                        {this.displayPost()}
                    </div>
                </div>
            </main>

        )
    }
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