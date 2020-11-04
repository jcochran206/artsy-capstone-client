import { useState, useEffect } from 'react'

export default function Profile() {

    useEffect(() => {
        // TODO: fetch + auth
    })



    return (
        <div className="profile">
            <div className="profile-header">
                <div className="title">
                    <div className='image-container'>
                        <img className='profile-image' alt='profile' src="#" />
                    </div>

                    <div className='username-container'>
                        <h2>username here</h2>
                        <div className="profile-details">
                            <p>Bio here</p>
                        </div>
                    </div>

                </div>
            </div>

            <ul className='profile-navlinks'>
                <li>Feed</li>
                <li>Posts</li>
                <li>Likes</li>
                <li>Repost</li>
            </ul>

            <div className="postcontainer">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    )
}