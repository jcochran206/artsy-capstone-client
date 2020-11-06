
export default function ProfileEdit(props){
    const updateProfile = () => {
        console.log('update profile')
    }
    return(
    <>
        <div className="edit">
            <div className='upload-inputs'>
                <label for="title">Title:</label>
                <input type="text" name="title" className="post-input" placeholder="prepopulated with existing post title" required/>
            </div>
            <div className='upload-inputs'>
                <label for="description">Description:</label>
                <input type="text" name="description" className="post-input" placeholder="prepopulated with existing post description" required/>
            </div>
            
            <div className="actions">
                <button onClick={() => props.show(false)}>Cancel</button>
                <button onClick={() => updateProfile()}>Update Profile</button>
            </div>
        </div>
    </>
    )
}