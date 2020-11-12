import {
    CgProfile,
} from 'react-icons/cg'

const AvatarIcon = props => (
    <div className={`${props.className}`}>
        <CgProfile />
    </div>
);

AvatarIcon.defaultProps = {
    className: '',
}

export default AvatarIcon;