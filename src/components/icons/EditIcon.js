import {
    RiEditLine,
} from 'react-icons/ri'

const EditIcon = props => (
    <div className={`${props.className}`}>
        <RiEditLine aria-labelledby='title' title='Edit Post'/>
    </div>
);

EditIcon.defaultProps = {
    className: '',
}

export default EditIcon;