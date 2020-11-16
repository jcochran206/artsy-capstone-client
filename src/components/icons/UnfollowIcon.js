import {
    RiUserUnfollowLine,
} from 'react-icons/ri'

const UnfollowIcon = props => (
    <div className={`${props.className}`}>
        <RiUserUnfollowLine />
    </div>
);

UnfollowIcon.defaultProps = {
    className: '',
}

export default UnfollowIcon;