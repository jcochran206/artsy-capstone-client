import {
    RiUserFollowLine,
} from 'react-icons/ri'

const FollowIcon = props => (
    <div className={`${props.className}`}>
        <RiUserFollowLine aria-labelledby='title' title='Follow'/>
    </div>
);

FollowIcon.defaultProps = {
    className: '',
}

export default FollowIcon;