import {
    RiEditLine,
} from 'react-icons/ri'

const EditIcon = props => (
    <div className={`${props.className}`}>
        <RiEditLine />
    </div>
);

EditIcon.defaultProps = {
    className: '',
}

export default EditIcon;