import {
    RiUserFollowLine,
} from 'react-icons/ri'

const FollowIcon = props => (
    <div className={`${props.className}`}>
        <RiUserFollowLine />
    </div>
);

FollowIcon.defaultProps = {
    className: '',
}

export default FollowIcon;