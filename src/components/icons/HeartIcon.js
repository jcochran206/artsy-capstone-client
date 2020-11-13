import {
    RiHeartLine,
} from 'react-icons/ri'

const HeartIcon = props => (
    <div className={`${props.className}`}>
        <RiHeartLine />
    </div>
);

HeartIcon.defaultProps = {
    className: '',
}

export default HeartIcon;