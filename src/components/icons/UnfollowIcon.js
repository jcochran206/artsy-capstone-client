import {
    RiUserUnfollowLine,
} from 'react-icons/ri'

const UnfollowIcon = props => (
    <div className={`${props.className}`}>
        <RiUserUnfollowLine aria-labelledby='title' title='Unfollow'/>
    </div>
);

UnfollowIcon.defaultProps = {
    className: '',
}

export default UnfollowIcon;