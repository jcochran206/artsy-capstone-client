import { useState } from 'react'

export default function ProfileEdit(props){
    const [bio, setBio] = useState(null)

    const updatebio = e => {
        const {id, value} = e.target
        setBio({[id]: value})
    }
    return(
    <>
        <div className="edit">
            <div className='upload-inputs'>
                <label htmlFor="bio">Bio</label>
                <input type="text" id="bio" className="post-input" onChange={(e) => updatebio(e)} required/>
            </div>
            
            <div className="actions">
                <button onClick={() => props.show(false)}>Cancel</button>
                <button onClick={() => props.updateProfile(bio)}>Update Profile</button>
            </div>
        </div>
    </>
    )
}