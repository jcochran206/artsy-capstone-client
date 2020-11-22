import {
    RiAddCircleLine,
} from 'react-icons/ri'

const AddIcon = props => (
    <div className={`${props.className}`}>
        <RiAddCircleLine aria-labelledby='title' title='Create New Post'/>
    </div>
);

AddIcon.defaultProps = {
    className: '',
}

export default AddIcon;