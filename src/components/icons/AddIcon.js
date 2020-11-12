import {
    RiAddCircleLine,
} from 'react-icons/ri'

const AddIcon = props => (
    <div className={`${props.className}`}>
        <RiAddCircleLine />
    </div>
);

AddIcon.defaultProps = {
    className: '',
}

export default AddIcon;