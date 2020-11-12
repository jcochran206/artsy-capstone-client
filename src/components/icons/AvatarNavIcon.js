import {
    CgProfile,
} from 'react-icons/cg'

const AvatarNavIcon = props => (
    <div className={`${props.className}`}>
        <CgProfile />
        <div className="nav__username">
            {props.username}
        </div>
    </div>
);

AvatarNavIcon.defaultProps = {
    className: '',
    username: '',
}

export default AvatarNavIcon;