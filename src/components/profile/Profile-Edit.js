
export default function ProfileEdit(props){
    const updateProfile = () => {
        console.log('update profile')
    }
    
    return(
    <>
        <div className="edit">
            <div className='upload-inputs'>
                <label htmlFor="description">Bio</label>
                <input type="text" name="description" className="post-input" required/>
            </div>
            
            <div className="actions">
                <button onClick={() => props.show(false)}>Cancel</button>
                <button onClick={() => updateProfile()}>Update Profile</button>
            </div>
        </div>
    </>
    )
}