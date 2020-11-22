import {
    CgProfile,
} from 'react-icons/cg'

const AvatarIcon = props => (
    <div className={`${props.className}`}>
        <CgProfile aria-labelledby='title' title='Avatar'/>
    </div>
);

AvatarIcon.defaultProps = {
    className: '',
}

export default AvatarIcon;