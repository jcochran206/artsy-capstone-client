import {
    RiHeartLine,
} from 'react-icons/ri'

const HeartIcon = props => (
    <div className={`${props.className}`}>
        <RiHeartLine aria-labelledby='title' title='Like'/>
    </div>
);

HeartIcon.defaultProps = {
    className: '',
}

export default HeartIcon;